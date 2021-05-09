// Write your solution in this file!
let  employee = {
    name: 'Sam',
    streetAddress: '12 Broadway'
};

employee;

function updateEmployeeWithKeyAndValue (employee, name, value) {
    return Object.assign({}, employee, { [name]: value });
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value; 
    return obj;
}; 


function deleteFromEmployeeByKey(employee, key) {
    let deleteEmployee = {...employee};
    delete deleteEmployee[key]
    return deleteEmployee;
};

function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
};



