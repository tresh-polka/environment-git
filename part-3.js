import {EmployeeDB, oneMoreEmployeeDB} from "./BD.js"

const objectСloning = (obj) => {
    let clonedObject = Object.assign(obj)
    console.log('Клонированая БД:')
    return clonedObject
}

const mergingDBs = (obj1, obj2) => {
    let newBD = obj1.employees
    newBD.push(obj2.employees)
    console.log('Общая БД:')
    return newBD.flat()
}

const getUniqueDepartments = (BD) => {
    let uniqueDepartaments = []
    for (const employee of BD.employees) {
        if (!uniqueDepartaments.includes(employee.departament)) {
            uniqueDepartaments.push(employee.departament)
        } 
    }
    console.log('Уникальные отделы:')
    // я совершенно не андерстенд, откуда здесь undefined
    return uniqueDepartaments;
  };


EmployeeDB.addEmployee('Иван Денисович', 'ДНД', 'Мастер')  
EmployeeDB.addEmployee('Олег Александрович', 'НГТУ им. Евстигнеева', 'Актёр-студент')  
EmployeeDB.addEmployee('Николай Александрович', 'Какая-то Лондонская Королевская Академия Музыки и Драмы', 'Главный Кларнетист')  
EmployeeDB.addEmployee('Сева', 'НГТУ им. Евстигнеева', 'Гениальный актёр-студент')  


console.log(objectСloning(EmployeeDB))
console.log(mergingDBs(EmployeeDB, oneMoreEmployeeDB))
console.log(getUniqueDepartments(EmployeeDB))
