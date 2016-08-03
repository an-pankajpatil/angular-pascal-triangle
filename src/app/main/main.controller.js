/*
 *  @name : MainController
 *  @description: Main Controller for Application. Display Pascal Triangle
 */
(function() {
    'use strict';

    angular
        .module('angularPascalTriangle')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(BinomialCoeffService) {

        //Assign this to vm, using controller-as syntax
        var vm = this;

        //Get Input Field
        vm.rows = {
            value: 0
        };

        //Default error variable to false;
        vm.error = false;

        //Pascal Triangle Array
        vm.output = [];

        //CSS Colors Array for Rows
        vm.colors = [
            'red',
            'blue',
            'orange',
            'green'
        ];

        //Set Row Colors
        vm.setColor = function(index) {
            return {
                color: vm.colors[index % 4]
            };
        };

        //Print Pascal Triangle when use press go
        vm.showPascalTriangle = function() {

            //if number is less than 1 show error
            if (vm.rows.value < 1) {
                vm.error = true;
                return;
            }
            vm.error = false;
            //Get the Triangle Array from Service
            vm.output = BinomialCoeffService.getPascalTriangleRows(vm.rows.value);
        };
    }
})();
