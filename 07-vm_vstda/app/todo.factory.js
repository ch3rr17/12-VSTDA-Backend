(function() {
    'use strict';

    angular
        .module('app')
        .factory('ToDoFactory', ToDoFactory); // https://docs.angularjs.org/guide/services

    ToDoFactory.$inject = ['$http', '$q', '$log']; // https://github.com/johnpapa/angular-styleguide/tree/master/a1#manual-annotating-for-dependency-injection

    /* @ngInject */
    function ToDoFactory($http, $q, $log) {

        var service = {
            grabToDo: grabToDo,
            newToDo: newToDo,
            updateToDo: updateToDo,
            delToDo: delToDo
        };

        return service;

        function grabToDo() {
            console.log("We got function");
            var defer = $q.defer();
            var url = 'http://localhost:56107/api/todoentries';
            console.log(url);
            $http({
                    method: "GET",
                    url: url
                }) // end of http
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                            console.log(response.data);
                            toastr.success('We have lists!');

                        } else {
                            defer.reject(response);
                            toastr.warning('no list found<br/>' + response.config.url);

                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);
                        $log.error(error);
                        toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                    });

            return defer.promise;
        }// end of GET function
    
        //Start of POST
        function newToDo(todoList) {
            console.log("We got function");
            var defer = $q.defer();
            var url = 'http://localhost:56107/api/todoentries';
            console.log(url);
            $http({
                    method: "POST",
                    url: url,
                    data: todoList
                }) // end of http
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                            console.log(response.data);
                            toastr.success('We have lists!');

                        } else {
                            defer.reject(response);
                            toastr.warning('no list found<br/>' + response.config.url);

                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);
                        $log.error(error);
                        toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                    });

            return defer.promise;

        }//end of POST

        //Start of PUT
        function updateToDo(todoList) {
            console.log("We got function");
            var defer = $q.defer();
            var url = 'http://localhost:56107/api/todoentries';
            console.log(url);
            $http({
                    method: "PUT",
                    url: url,
                    data: todoList
                }) // end of http
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                            console.log(response.data);
                            toastr.success('We have lists!');

                        } else {
                            defer.reject(response);
                            toastr.warning('no list found<br/>' + response.config.url);

                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);
                        $log.error(error);
                        toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                    });

            return defer.promise;

        }//end of PUT

        //Start of DELETE
        function delToDo(id) {
            console.log("We got function");
            var defer = $q.defer();
            var url = 'http://localhost:56107/api/todoentries/' + id;
            console.log(url);
            $http({
                    method: "DELETE",
                    url: url
                }) // end of http
                .then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                            console.log(response.data);
                            toastr.success('We have lists!');

                        } else {
                            defer.reject(response);
                            toastr.warning('no list found<br/>' + response.config.url);

                        }
                    },
                    // failure
                    function(error) {
                        defer.reject(error);
                        $log.error(error);
                        toastr.error('error: ' + error.data + '<br/>status: ' + error.statusText);
                    });

            return defer.promise;

        }//end of DELETE

         
    }//end of factory function
})();
