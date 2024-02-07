import { EmployeeDB } from "./BD.js"


const provideEmployeeInformation = (arr) => {
    console.log('Список характеристик сотрудников:')
    return arr.employees
}


const capitalizingNames = (arr) => {
    const capitalizeName = (employee) => {
        employee.name = employee.name.toUpperCase()
        return employee
    }
    const employeesNames = arr.map((employee) => capitalizeName(employee))
    return employeesNames
}

const lowerCasingDepartaments = (arr) => {
    const lowerCasingDepartament = (employee) => {
        employee.departament = employee.departament.toLowerCase()
        return employee
    }
    const employeesDepartaments = arr.map((employee) => lowerCasingDepartament(employee))
    return employeesDepartaments
}


console.log(capitalizingNames(EmployeeDB.employees))
console.log(lowerCasingDepartaments(EmployeeDB.employees))