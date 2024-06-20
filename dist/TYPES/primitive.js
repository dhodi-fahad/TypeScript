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
let isTrue = true;
let isFalse = false;
// NUMBER
let intValue = 30;
let floatValue = 3.14;
// STRING
let fullName = 'John Doe';
// VOID
let voidFun = () => {
    return;
};
// UNDEFINED - uninitialized
let undefinedValue;
console.log(undefinedValue); //undefined
// NULL - absent
function coolFunction(x) {
    if (x === null) { // strict check
        console.log('x is null(absent)');
    }
    else if (x) {
        console.log('Hello, ' + x.toUpperCase());
    }
}
coolFunction(null);
coolFunction('John');
coolFunction();
