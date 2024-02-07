const EmployeeDB = {
    employees: [],

    addEmployee(
        name, //Имя нового сотрудника
        departament, //Отдел
        position //Должность
    ) {
        const employee = {name, departament, position};
        this.employees.push(employee);
        return this.employees
    }
};


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


EmployeeDB.addEmployee('Иван Денисович', 'ДНД', 'Мастер')  
EmployeeDB.addEmployee('Олег Александрович', 'НГТУ им. Евстигнеева', 'Актёр-студент')  
EmployeeDB.addEmployee('Николай Александрович', 'Какая-то Лондонская Королевская Академия Музыки и Драмы', 'Главный Кларнетист')  

console.log(capitalizingNames(EmployeeDB.employees))
console.log(lowerCasingDepartaments(EmployeeDB.employees))