var app = angular.module('todoList', []);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

        $scope.todos = [];

        var getDbObjects = function(){
            $http({
                method:'GET',
                url: "/tasks/getTask"
            }).then(function(response){
                console.log(response);
                for (var i = 0; i < response.data.length; i++) {
                    $scope.todos.push(response.data[i]);
                }
            });
        };
        getDbObjects();

        $scope.completed = function(index) {
            //$scope.todos[index].done = true;
            $http.post(
            '/tasks/editTask',
                $scope.todos[index]
            );
         };

        $scope.removeItems = function (){
            $http({
                method: 'DELETE',
                url: '/tasks/deleteDone'
            });
            $scope.todos = $scope.todos.filter(function(todo){
                return !todo.done;
            });
        };

        $scope.addTodo = function() {
            $http({
                method:'POST',
                url: "/tasks/addTask",
                data: {text: $scope.todoText, done:false}
            });
            $http({
                method:'GET',
                url: "/tasks/getTask"
            }).then(function(response){
                console.log(response);
                var i = response.data.length -1;
                $scope.todos.push(response.data[i]);
            });
            $scope.todoText = '';
        };
    }]);

