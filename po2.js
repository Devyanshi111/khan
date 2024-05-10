angular.module('studentMarksApp', []) 
    .controller('StudentMarksController', function() { 
        var vm = this; 
        vm.studentMarks = [ 
            { studentId: '1', name: 'John', subject: 'Math', marks: 90 }, 
            { studentId: '2', name: 'Alice', subject: 'Science', marks: 85 }, 
            { studentId: '3', name: 'Bob', subject: 'English', marks: 75 } 
        ]; 
 
        vm.newMark = {}; 
        vm.addStudentMark = function() { 
            vm.studentMarks.push(vm.newMark); 
            vm.newMark = {}; 
        }; 
 
        vm.editStudentMark = function(mark) { 
            vm.newMark = angular.copy(mark); 
        }; 
 
        vm.deleteStudentMark = function(mark) { 
            var index = vm.studentMarks.indexOf(mark); 
            vm.studentMarks.splice(index, 1); 
        }; 
    });