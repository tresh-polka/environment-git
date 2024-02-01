const EmployeeDB = {
    employees: [],
    total: 0,

    addEmployee(
        name, //Имя нового сотрудника
        departament, //Отдел
        position //Должность
    ) {
        const employee = {name, departament, position};
        this.employees.push(employee);
        return this.employees
    },

    removeEmployee(
        removeEmployeeName //Имя сотрудника, которого надо удалить из БД
    ) {
        for(let i = 0; i < this.employees.length; i++) {
            if(this.employees[i].name === removeEmployeeName) {
                this.employees.splice(i, 1);
            };
        };
        return this.employees
    },

    updateEmployee(
        updateName, //Имя сотрудника, для которого надо обновить информацию
        updateDepartament, //Новый отдел
        updatePosition //Новая должность
    ) {
        for (const employee of this.employees) {
            if(employee.name === updateName) {
                employee.departament = updateDepartament;
                employee.position = updatePosition;
            };
        };
        return this.employees
    },

    employeesReading() {
        const employeesNames = this.employees.map((employee) => employee.name)
        console.log(`Список сотрудников: ${employeesNames}`);
    }
};

const provideEmployeeInformation = (arr) => {
    console.log('Список характеристик сотрудников:')
    return arr.employees
}


EmployeeDB.addEmployee('Иван Денисович', 'ДНД', 'Мастер')  
EmployeeDB.employeesReading()  
EmployeeDB.addEmployee('Олег Александрович', 'НГТУ им. Евстигнеева', 'Актёр-студент')  
EmployeeDB.addEmployee('Николай Александрович', 'Какая-то Лондонская Королевская Академия Музыки и Драмы', 'Главный Кларнетист')  
EmployeeDB.employeesReading()  
EmployeeDB.removeEmployee('Иван Денисович')
EmployeeDB.updateEmployee('Николай Александрович', 'Какой-то Лондонский Оркестр', 'Вообще Самый Главный Кларнетист')

console.log(provideEmployeeInformation(EmployeeDB))