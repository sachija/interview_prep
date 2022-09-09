function myFun(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  myFun.prototype.nationality = "English";
  const myFather = new myFun("John", "Doe", 50, "blue");
 document.getElementById("demo").innerHTML =
"The nationality of my father is " + myFather.nationality; 

