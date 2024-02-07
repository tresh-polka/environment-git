import {EmployeeDB} from "./BD.js"

const characteristicsComparison = (name1, name2, characteristics) => {
    let characteristic1 = ''
    let characteristic2 = ''
    for (const employee of EmployeeDB.employees) {
        if (name1 === employee.name) {
            characteristic1 = employee[characteristics]
        } else if (name2 === employee.name) {
            characteristic2 = employee[characteristics]
        }
    }
    if (characteristic1 === characteristic2) {
        return (`${characteristics} ${characteristic1} are the same`)
    } else {
        return (`${characteristics} ${characteristic1} & ${characteristic2} are different`)
    }
}

console.log(characteristicsComparison('Андрей Алексеевич', 'Олег Александрович', 'departament'))
console.log(characteristicsComparison('Андрей Алексеевич', 'Олег Александрович', 'position'))
console.log(characteristicsComparison('Андрей Алексеевич', 'Иван Денисович', 'position'))
