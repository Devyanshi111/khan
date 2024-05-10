angular.module('employeeManagementApp', [])
 .controller('EmployeeController', function() {
 var vm = this;
 vm.employees = [
 { employeeId: '1', name: 'John Doe', department: 'HR', position: 'Manager' },
 { employeeId: '2', name: 'Alice Smith', department: 'Finance', position: 'Accountant' },
 { employeeId: '3', name: 'Bob Johnson', department: 'IT', position: 'Developer' }
 ];
 vm.newEmployee = {};
 vm.addEmployee = function() {
 vm.employees.push(vm.newEmployee);
 vm.newEmployee = {};
 };
 vm.editEmployee = function(employee) {
 vm.newEmployee = angular.copy(employee);
 };
 vm.deleteEmployee = function(employee) {
 var index = vm.employees.indexOf(employee);
 vm.employees.splice(index, 1);
 };
 });