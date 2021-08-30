/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
let employee 
 function createEmployeeRecord(arr){
    employee = {
        firstName: arr[0], 
        familyName: arr[1], 
        title: arr[2], 
        payPerHour: arr[3], 
        timeInEvents: [], 
        timeOutEvents: []}
    
return employee
}

function createEmployeeRecords(arr){
    let employees = []
    for(let i = 0; i < arr.length; i++){
       employees.push(createEmployeeRecord(arr[i]))
    }
    return employees
}

let createTimeInEvent = function(dateStamp){
     this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(11), 10),
        date: dateStamp.slice(0, 10),
    })
    return this
}

let createTimeOutEvent = function(dateStamp){
    this.timeOutEvents.push({
       type: "TimeOut",
       hour: parseInt(dateStamp.slice(11), 10),
       date: dateStamp.slice(0, 10),
   })
   return this
}

function hoursWorkedOnDate(date){
    let timeInDate = this.timeInEvents.find(e => e.date === date).hour
    let timeOutDate = this.timeOutEvents.find(e => e.date === date).hour
    let hoursWorked = (timeOutDate - timeInDate)/100
    return hoursWorked 
}

function wagesEarnedOnDate(date){
    let wage = this.payPerHour
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return wage * hoursWorked
}



function findEmployeeByFirstName(arr, name){
    return arr.find(e => e.firstName === name)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(arr){
    // console.log(arr.map(function(employee){
    //     return allWagesFor(employee)})
    
    let employeePay = arr.map((employee) =>
    {return allWagesFor.call(employee)})
   
   
    return employeePay.reduce((x, y)=> x + y)
}

