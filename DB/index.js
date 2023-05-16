const connection = require('./connection');

class DB {
constructor(connection) {
    this.connection = connection;
}

findAllDepartments() {
    return this.connection.promise().query(
        'SELECT * FROM departments;'
    );
}
findAllRoles(){
    return this.connection.promise().query(
        'SELECT * FROM roles;'
    );
}
findAllEmployees(){
    return this.connection.promise().query(
        'SELECT * FROM employees;'
    );
}
addDepartment(department){
    return this.connection.promise().query(
        'INSERT INTO department SET ?',
        department
    );
}
addRole(role){
    return this.connection.promise().query(
        'INSERT INTO role SET ?',
        role
    );
}
addEmployee(employee){
    return this.connection.promise().query(
        'INSERT INTO employee SET ?',
        employee
    );
}
updateEmployee(employee){
    return this.connection.promise().query(
        'UPDATE employee SET ? WHERE ?',
        employee
    );
}
createDepartment(name){
    return this.connection.promise().query(
        'INSERT INTO departments SET ?',
        name
    );
}
createRole(role){
    return this.connection.promise().query(
        'INSERT INTO roles SET ?',
        role
    );
}
createEmployee(employee){
    return this.connection.promise().query(
        'INSERT INTO employees SET ?',
        employee
    );
    }
};


module.exports = new DB(connection);