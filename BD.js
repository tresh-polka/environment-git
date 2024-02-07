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


EmployeeDB.addEmployee('Иван Денисович', 'ДНД', 'Мастер')  
EmployeeDB.addEmployee('Олег Александрович', 'НГТУ им. Евстигнеева', 'Актёр-студент')  
EmployeeDB.addEmployee('Николай Александрович', 'Какая-то Лондонская Королевская Академия Музыки и Драмы', 'Главный Кларнетист')  
EmployeeDB.addEmployee('Андрей Алексеевич', 'НГТУ им. Евстигнеева', 'Мастер') 


const oneMoreEmployeeDB = {
    employees: [],

    addEmployee(
        name, //Имя нового сотрудника
        departament, //Отдел
        position //Должность
    ) {
        const employee = {name, departament, position};
        this.employees.push(employee);
        return this.employees
    },
    employeesReading() {
        const employeesNames = this.employees.map((employee) => employee.name)
        console.log(`Список сотрудников: ${employeesNames}`);
    }
};

oneMoreEmployeeDB.addEmployee('Елена Алексеевна', 'Психологический театр-студия "Синий Краб"', 'Режиссёр')  
oneMoreEmployeeDB.addEmployee('Полина Андреевна', 'Магазин, вредящий вашему здоровью', 'Лучший в мире консультант')  
oneMoreEmployeeDB.addEmployee('Анечка Павловна', 'Отсутствие точки отсчета', 'Летающая девочка')  
oneMoreEmployeeDB.addEmployee('Александра Илларионовна', 'Психологический театр-студия "Синий Краб"', 'Сбежала')  


export {EmployeeDB, oneMoreEmployeeDB}