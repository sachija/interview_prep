/* <h2>Que 8 Explain passed by value and passed by reference</h2> */
let a=5;
console.log(a);
b=a+2;
console.log(b);
console.log(a);


let obj1=[1,2,2,3,4];
let obj2=obj1[2]+2;
console.log(obj2);

// Que 9
// A self-invoking (also called self-executing) function is a nameless (anonymous) function that is invoked immediately after its definition.

(function(x){
	console.log(x);
})("welcome to full stack dev course");