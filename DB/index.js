const connection = require('./connection');

class DB {
constructor(connection) {
    this.connection = connection;
}
viewDepartments() {
    return this.connection.query(
        'SELECT * FROM department'
    );
}
viewRoles(){
    return this.connection.query(
        'SELECT * FROM role'
    );
}
viewAllEmployees(){
    return this.connection.query(
        'SELECT * FROM employee'
    );
}
addDepartment(department){
    return this.connection.query(
        'INSERT INTO department SET ?',
        department
    );
}
addRole(role){
    return this.connection.query(
        'INSERT INTO role SET ?',
        role
    );
}
addEmployee(employee){
    return this.connection.query(
        'INSERT INTO employee SET ?',
        employee
    );
}
updateEmployee(employee){
    return this.connection.query(
        'UPDATE employee SET ? WHERE ?',
        employee
    );
}
};

module.exports = new DB(connection);