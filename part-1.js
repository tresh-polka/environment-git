import {EmployeeDB} from "./BD.js"

const provideEmployeeInformation = (arr) => {
    console.log("Список характеристик сотрудников:");
    return arr.employees;
  }

EmployeeDB.employeesReading()  
EmployeeDB.removeEmployee('Иван Денисович')
EmployeeDB.updateEmployee('Николай Александрович', 'Какой-то Лондонский Оркестр', 'Вообще Самый Главный Кларнетист')

console.log(provideEmployeeInformation(EmployeeDB))
