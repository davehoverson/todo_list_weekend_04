var app = angular.module('todoList', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

        $scope.todos = [];

        $http({
            method:'GET',
            url: "/tasks/getTask"
        }).then(function(response){
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                $scope.todos.push(response.data[i]);
            }
        });

    $scope.completed = function(index) {
        $scope.todos[index].done = true;
        $http.post(
            '/tasks/editTask',
            $scope.todos[index]
        );
        console.log($scope.todos[index]);
    };

        $scope.removeItems = function (){
            $scope.todos = $scope.todos.filter(function(todo){ return !todo.done });
        };

        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.todoText, done:false});
            console.log($scope.todoText);
            $http({
                method:'POST',
                url: "/tasks/addTask",
                data: {text: $scope.todoText, done:false}
            });
            $scope.todoText = '';
        };
    }]);

