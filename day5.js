
// let element1=document.getElementsByClassName("heading")
// let element2=document.getElementById("button1")
// let element3=document.createElement("h1");
//     element3.innerText="MERN Stack";
//     element2.addEventListener('click',()=>{
//     let element3=document.createElement("h1");
//     element3.innerText="MERN Stack";
//     element1.appendChild(element3);

// });
function formText(){
element1=document.getElementById("heading").innerText="MERN stack"

}

// que 2
element4=document.getElementsByTagName("h1"[0]);
console.log(element4)

// que 3
setInterval(()=>{
let clock=new Date();
let hour=document.getElementById("hr").innerText=clock.getHours();
let minutes=document.getElementById("min");
let seconds=document.getElementById("sec");
// hour.innerText=clock.getHours();
minutes.innerText=clock.getMinutes();
seconds.innerText=clock.getSeconds();

},1000)

function textChange (){
    document.querySelector('h2').innerText = "Welcome to Elevation Acacdemy!"
}

// Given an array of 0's and 1's find out number of 0's
let myArr=[1,0,0,0,1,0,1,0,1];
let count = 0;
for (number of myArr) {
    if (number === 0)
        count = count + 1;
}
console.log(count);

// let count;
// for(let i=0;i<myArr.length;i++)
// if
//     (myArr[i]===0)
// count=count++;
// return count;
// myArr.filter(v=>v===0).length



function textHide(){
    var x1 = document.getElementById("text2")
    x1.style.display='none'
}
// Given an array find out total no. of odd and even nos.
 let myArr1=[2,5,7,8,79,56,45]
// // let count1;
// // for(let i=0;i<myArr1.length;i++)
// for (number of myArr1){
//     if(number%2===0)
// // if(myArr1[i]%2==0);
// count1++
// }
 let count1=myArr1.filter(y=>y%2==0)
 console.log(count1.length);
 let count2=myArr1.length-count1.length
 console.log(count2);

//  Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same
obj1={
string1:"its me",
 array1:[2,3,4,5,5]


}
obj2={
    string2:"this is me",
    array:[1,2,3,4,5]
}
console.log( obj1.array1.join()==obj2.array.join()? true:false);


// const vowels=["a","e","i","o","u"]
// let str="hello dosto"
// let count3;
// for(let letter of str.toLowerCase()){
// if (vowels.includes(letter)){
//     count3++
// }

// }
// console.log(count3);
 let string="hello friends"
 let count4=0;
 for(let i in string)
 if(string[i].toUpperCase()=="A"|| string[i].toUpperCase()=="E"||string[i].toUpperCase()=="I"|| string[i].toUpperCase()=="O"||string[i].toUpperCase()=="U")
 count4++;
 console.log(count4);