


// Q1.Create a nested object for a student with {name, subjects:{math, science}}. Access science.

const student={
    name:"digambar",
    subjects:{
        math:"math",
        science:"science"
    }
}

console.log(student.subjects.science);







// Q2.Loop through an object using for...in and print all key–value pairs.
const customer={
    name:"cust1",
    contact:8619088221,
    email:"digambarb18@icccsss.gmail.com"
}

for(key in customer){
    console.log(key);
    
}


const chor={
    work:"robbery",
    chori(){
        console.log("robbery sucessful")
    }
}

chor.chori()


// Q3 Create an array of objects representing students. Print names of all students older than 20.

const students=[{name:"digambar",age:20},
                {name:"lucifer",age:22},
                {name:"iron man",age:25},
                {name:"caption america",age:28}
]


for(const student of students){
    if(student.age>20){
        console.log(student.name)
    }
}







// Q4.Store user data in an object and hide password using Symbol.



const passwordKey=Symbol("password")


const user={
    name:"digambar",
    email:"digambarb18@gmail.com",
    class:"",
    age:"",
    [passwordKey]:"lucifer"
}

console.log(user[passwordKey])



// Q5.Convert all string values of an object to uppercase.


// used a user objext here 

for(const item in user){
    if(typeof(user[item])==="string"){
       user[item] = user[item].toUpperCase()
    }
}
console.log(user)

// Q6.Remove properties with empty string values from an object.
console.log("after deleting enptyy properties ")

for(item in user){
    if(user[item]===""){
        delete user[item]
    }
}
console.log(user)