


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