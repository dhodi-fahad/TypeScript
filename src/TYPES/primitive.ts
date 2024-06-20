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
let isTrue: boolean = true;
let isFalse: boolean = false;

// NUMBER
let intValue: number = 30;
let floatValue: number =3.14;

// STRING
let fullName: string = 'John Doe';

// VOID
let voidFun = ():void => {
    return;
}

// UNDEFINED - uninitialized
let undefinedValue;
console.log(undefinedValue) //undefined

// NULL - absent
function coolFunction (
    x?: string 
    | null
    ) {
    if(x === null){ // strict check
        console.log('x is null(absent)')
    } else if (x) {
        console.log('Hello, '+ x!.toUpperCase());
    }

}

coolFunction(null)
coolFunction('John')
coolFunction()


