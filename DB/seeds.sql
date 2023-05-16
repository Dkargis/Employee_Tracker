


INSERT INTO departments (department_name)
VALUES ('Sales'), 
('Engineering'), 
('Finance'), 
('Legal'), 
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead', 100000.00, 1), 
('Salesperson', 80000.00, 1), 
('Lead Engineer', 150000.00, 2), 
('Software Engineer', 120000.00, 2), 
('Accountant', 125000.00, 3), 
('Legal Team Lead', 250000.00, 4), 
('Lawyer', 190000.00, 4), 
('HR Lead', 140000.00, 5), 
('HR Assistant', 80000.00, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 1), 
('Mike', 'Chan', 2, 1), 
('Ashley', 'Rodriguez', 3, 1), 
('Kevin', 'Tupik', 4, 1), 
('Malia', 'Brown', 5, 2), 
('Sarah', 'Lourd', 6, 2), 
('Tom', 'Allen', 7, 2), 
('Sam', 'Clemens', 8, 2), 
('Samantha', 'Jones', 9, 2);
