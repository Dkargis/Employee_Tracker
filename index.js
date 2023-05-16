const inqier = require('inquirer');
const fs = require('fs');
const db = require('./db');

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




