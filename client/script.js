var app = angular.module('todoList', []);

app.controller('MainController', ['$scope', function($scope) {

        $scope.todos = [];

        $scope.removeItems = function (){
            $scope.todos = $scope.todos.filter(function(todo){ return !todo.done });
        };

        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };

    }]);

