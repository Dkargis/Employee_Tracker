const fs = require('fs');
const db = require('./db');
const {prompt} = require('inquirer');






init();

function init() {
    questions();
};



function questions() {
    prompt(
        [
            {
                type: 'list',
                name: 'Options',
                message: 'What would you like to do?',
                choices: [
                    {
                        name: 'View All Departments',
                        value: 'View All Departments'
                    },
                    {
                        name: 'View All Roles',
                        value: 'View All Roles'
                    },
                    {
                        name: 'View All Employees',
                        value: 'View All Employees'
                    },
                    {
                        name: 'Add a Department',
                        value: 'Add a Department'
                    },
                    {
                        name: 'Add a Role',
                        value: 'Add a Role'
                    },
                    {
                        name: 'Add an Employee',
                        value: 'Add an Employee'
                    },
                    {
                        name: 'Update an Employee Role',
                        value: 'Update an Employee Role'
                    },
                ]
            },
        ]
    )

    .then((answers) => {
        switch (answers.Options) {
            case 'View All Departments':
                viewDepartments();
                break;
            case 'View All Roles':
                viewRoles();
                break;
            case 'View All Employees':
                viewEmployees();
                break;
            case 'Add a Department':
                addDepartment();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Update an Employee Role':
                updateEmployee();
                break;
        }
    }
    )

};

function viewDepartments() {
    db.findAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.log('\n');
        console.table(departments);
    })
    .then(() => questions());
};

function viewRoles() {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        console.log('\n');
        console.table(roles);
    })
    .then(() => questions());
};

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log('\n');
        console.table(employees);
    })
    .then(() => questions());
};

function addDepartment() {
    prompt([
        {
            name: 'name',
            message: 'What is the name of the department?'
        }
    ])
    .then(res => {
        let name = res;
        db.createDepartment(name)
    })
    .then(() => questions());
};

function addRole() {
    db.findAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(({ id, name }) => ({
            name: name,
            value: id
        }));
        prompt([
            {
                name: 'title',
                message: 'What is the name of the role?'
            },
            {
                name: 'salary',
                message: 'What is the salary of the role?'
            },
            {
                type: 'list',
                name: 'department_id',
                message: 'Which department does the role belong to?',
                choices: departmentChoices
            }
        ])
        .then(role => {
            db.createRole(role)
        })
        .then(() => questions());
    })
}

function addEmployee() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
            name: `${first_name} ${last_name}`,
            value: id
        }))
        db.findAllRoles()
        .then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({ id, title }) => ({
                name: title,
                value: id
            }))
        
        prompt([
            {
                name: 'first_name',
                message: 'What is the first name of the employee?'
            },
            {
                name: 'last_name',
                message: 'What is the last name of the employee?'
            },
            {
                type: 'list',
                name: 'role_id',
                message: 'What is the role of the employee?',
                choices: roleChoices
            },
            {
                type: 'list',
                name: 'manager_id',
                message: 'Who is the manager of the employee?',
                choices: employeeChoices
            }
        ])
        .then(employee => {
            db.createEmployee(employee)
        })
        .then(() => questions());
    }
    )
    })
}


