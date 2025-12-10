// variables and constants

// "use strict" for a using a 

// let name="diagmbar "
 
const gmail="digambarb18@gmail.com"

var collage="indira collage "

let course=true;


// console.table([name,gmail,collage,course]) // can use to console multiple values at once 



// let city=null
// let pincode

// console.log(typeof(city)) // object 
// console.log(typeof(pincode)) // undefined 



let number=33
// let stringNumber=String(number)
// console.log(typeof stringNumber)


// console.log("1"+3) // 13 
// console.log(4+"3")  // 43
// console.log(1+5+"4")  // frist 5+1=6 amd then +4 =64  beacuse the number comes frist and then string comes last 
// console.log("1"+5+4) // add all considering as a string beacuse the string comes frist 

//  comparisons in js 


// console.log(1>2)
// console.log(1<=2)
// console.log(1!=2)
// console.log(1!="2")  // here during a comparison js convert the string to number automatically 
// console.log("1"!=2)


// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)


// let id=Symbol("1024")
// console.log( typeof id)


//hoisting

// var name;
// console.log(name);
// name="digambar";
// console.log(name)

// string in js 

let student="indira collage student"; // decleration of string 

// another spacial type of string is called templete litral this allows to use a variables , expression or a multipleline string 

let string=`this is student from a ${student} who score ${20+50} marks`



// console.log(name.split("",4));

// console.log(name.repeat(100))

// let name="digambar"
// let surname="bhujbal"

// console.log(name.concat(" ",surname));




// Object in js 


// creation of the object 

let user={
    name:"digambar",
    age:20,
    password:"this@123"
}

let obj=new Object(); // object is declerd we can add properties letter like obj.name="your_name"

// Constructor function 

function person(name,age){
    this.name=name,
    this.age=age,
    this.greet=function(){
        console.log(`Hello i am ${this.name}`)
    }
}

// Creating a instances of this function 


const person1=new person("digambar",25)

console.log(person1.greet());


