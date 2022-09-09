// que 1 what is the closure?
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
// que 2 what is the spread operator?
 The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne,...numbersTwo]

// que 3
// What is the difference between let const and var?

let - 1. we can declare the variable name in one line and initialize it on another line 
    // or in the same line itself.
    // 2. Two variables with same name aren't possible with let
    // 3. We can reassign/update the values of the variable which have already been initialized.
    // 4. let is block scoped. 
    // 5. Let doesn't supports Hoisting.
const - 1. we have to declare the variable and initialize in the same line itself.
    // 2. Two variables with same name aren't possible with const.
    // 3. We can't reassign/update the values of the variable which have already been initialized.
    // 4. const is block scoped. 
    // 5. const also doesn't supports Hoisting.
var - 1. we can declare the variable name in one line and initialize it on another line 
    // or in the same line itself.
    // 2. Two variables with same name are possible with var
    // 3. We can reassign/update the values of the variable which have already been initialized.
    // 4. var is global scoped. 
    // 5. var supports Hoisting.
  
    que 4 what is the difference between == and === operator?
//  The main difference between the == and === operator in javascript is that the == operator does the type conversion of the operands before co


que 5 what is the execution contex ?

