function updateEmployeeWithKeyAndValue(employee,key,value){
    const newemployee = {...employee};

    newemployee[key] = value;

    return newemployee;
}

const employee = updateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "11 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
   employee[key]= value;

   return employee;
}


function deleteFromEmployeeByKey(employee,key){
    const employeeClone = {...employee};
    delete employeeClone[key];
    return employeeClone;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}