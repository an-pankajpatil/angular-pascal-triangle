/*
 *  @name : BinomialCoeffService
 *  @description: Create Pascal Triangle Array for specified number of rows
 */
(function() {
    'use strict';
    angular
        .module('angularPascalTriangle')
        .service('BinomialCoeffService', BinomialCoeffService);

    function BinomialCoeffService() {
        this.fact = function(num) {
            var result = '';
            if (num <= 1) {
                return num;
            } else {
                result = num * this.fact(num - 1);
            }
            return result;

        };

        this.calcBinomialCoeff = function(row, j) {
            return Math.round(this.fact(row) / (this.fact(j) * this.fact(row - j)));
        };

        //Get Single Rows Array
        this.calcRows = function(row) {
            var result = [];

            //if row is less than equal to 0, then return only 1
            if (row <= 0)
                return [1];

            //if row is equal to 1, then return 1 1
            if (row == 1)
                return [1, 1];

            // push 1 to result array to start the row with 1
            result.push(1);

            for (var j = 1; j < row; j++) {
                //Add two number above the row
                //var data = Math.round(this.fact(row) / (this.fact(j) * this.fact(row - j)));
                result.push(this.calcBinomialCoeff(row, j));
            }

            //push 1 to result array to end the row with 1
            result.push(1);
            return result;
        };

        //Get All the Triangle Rows
        this.getPascalTriangleRows = function(rows) {
            var pascalTriangle = [];
            for (var i = 0; i < rows; i++) {
                //Get Single Row and Push it to our final triangle
                pascalTriangle.push(this.calcRows(i))
            }
            return pascalTriangle;
        };
    }
})();
