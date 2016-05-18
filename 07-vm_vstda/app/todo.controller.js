(function() {
    'use strict';

    angular
        .module('app')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['$log', 'ToDoFactory'];

    /* @ngInject */
    function ToDoController($log, ToDoFactory) {
        var vm = this;
        vm.title = 'ToDoController';
       
        //vm.todoLists = [];

        //Grabs current ToDoList from the DB
        vm.grabToDo = function(){
            ToDoFactory.grabToDo().then(
                function(response){
                    vm.todoLists = response.data;
                    console.log(vm.todoLists);
                },
                function(error){
                    $log.error('failure getting todos', error);
                });
            
        }// end of grab to do function

        //Add new to do item(s) from the db
         vm.newToDo = function (newToDoList){
            ToDoFactory.newToDo(newToDoList).then(
                function(response){
                    vm.todoLists.push(response.data);
                    console.log('push test', vm.todoLists);   
                },
                function(error){
                    $log.error('failure getting todos', error);
                });
            vm.newToDo = {};
        }// end of new to do function

        //Update to do item(s) from the db
        vm.editToDo = function(todo){
            ToDoFactory.updateToDo(updateToDoList).then(
                function(response){
                    vm.todoLists.push(response.data);
                },
                function(error){
                    $log.error('failure updating todos', error);
                });
        }
       

        //Deletes item(s) from the db

        vm.deleteToDo = function(id,index){
            ToDoFactory.delToDo(id).then(
                function(response){
                    vm.todoLists.splice(index,1);
                    console.log('deleted item', vm.todoLists);
                },
                function(error){
                    $log.error('failure deleting item', error);
                });
        }//end of delete function
        


        //Sort Items
        vm.sortOrder = function(order){
            vm.todoLists = $filter('orderBy')(vm.todoLists, order);
        }

        //activate function        
         var activate = function(){
            vm.grabToDo();
        }

        activate();

       
    } //end of main controller
})();
