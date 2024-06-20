"use strict";
/***
    PRIMITIVE DATATYPES
    * Boolean
    * Number
    * String
    * Void
    * Undefined
    * Null
 **/
// BOOLEAN
var isTrue = true;
var isFalse = false;
// NUMBER
var intValue = 30;
var floatValue = 3.14;
// STRING
var fullName = 'John Doe';
// VOID
var voidFun = function () {
    return;
};
// UNDEFINED - uninitialized
var undefinedValue;
console.log(undefinedValue); //undefined
// NULL - absent
function coolFunction(x) {
    if (x == null) {
        console.log('x is null(absent)');
    }
    else if (x) {
        console.log('Hello, ' + x.toUpperCase());
    }
}
coolFunction(null);
coolFunction('John');
coolFunction();
