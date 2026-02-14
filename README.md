#  🎉 Javascript Notes 


## basics in javascript 
### variables 
1. var global scope  variable  (not much used in todays program ) 
2. let block scope variable 
3. const block scope varible and value is not changabel 
   

## datatype in js 
1. number
2. bigint
3. string
4. boolean
5. null => type of null is object 
6. undifined => type of undefined is undefined  
7. symbol
8. object 

## conversion of datatype in js 
### in number (Number)
"33"=> 33
"33abr"=> NaN
true=> 1 , false=> 0
 
### in boolean (Boolean)
""=> false 
" digambar "=> true 

### in string 
let number =33
let numberInString=String(number)

## operations in js 

```js
console.log("1"+3) // 13 
console.log(4+"3")  // 43
console.log(1+5+"4")  // frist 5+1=6 amd then +4 =64  beacuse the number comes frist and then string comes last 
console.log("1"+5+4) // add all considering as a string beacuse the string comes frist 

```
## comparison in js 

1. = this is a assignment operator
2. == this is a comparison operator 
3. === strict check . comparison operator check for value as well as daatatypes also 

```js
console.log(1>2)
console.log(1<=2)
console.log(1!=2)
console.log(1!="2")  // here during a comparison js convert the string to number automatically 
console.log("1"!=2)


console.log(null>0)
console.log(null==0)
console.log(null>=0)
```


## non primtive datatypes in js 
1. Array
   ```js
   let student=["digambar "," krish","pratik"]
   ```

2. Object 
```js
let obj={
    name:"digambar".
    class:" bsc computer science ",
    age:"21"
}
```
## Hoisting 

decleration of the variable and function ios moved to the top of their scope (global or block )
only variable is moves to the top not value 
```js
var name;
console.log(name);// undefined 
name="digambar";
console.log(name) //digambar 
```


## memory in js 
 stack memory is used wneh we use a primitive datatype 
 heap memory is usd when we use a non-primitive datatype 

 ## variable naming rule in js 

 1. name must start with a _,letter or $ sign 
 2. case sensitive 
 3. no space allowed in variable nmae
 4. cannot use reserved keyword 


## String in js 

decleration we can delcare using single quote or double quuote or making a tremplate litral 
```js
let name="digambar";
let adress=` my name is ${name} and i am from ahilyanagar`;

// string length calculate 

console.log(name.length)

// access individual character of string using a indexing 

console.log(name[4]);

// making a uppercase and lowercase 

name.toUpperCase();
name.toLowrCase();

// trim method to remove a space from both side 

"      this is a        ".trim();

// slicing a string means a storing or displaying a some part of the string 

console.log(name.slice(1,5)) // it print a name fron index 1 till index 4 not include the last index 


// substring (looks similer like a slice but here we cant use a negative indexes if uses it treart like a 0)

name.substring(-5,4) // here -5 treat like a 0 and it return a 0 to 4 


// repalcing a some part of the string using .replace(searchValue,replaceValue )
// this replace the frist match of substring 


" Apple Apple ".replace("Apple","Mango") // here we are replacing a Apple with Mango 
// result is " Mango Apple "

// replace all works like a replace but it replace all occurance of the substring 
 " Apple Apple orange ".replaceAll("Apple"," Mango")// result is " Mango Mango orange "

 // .split(seprator , limit?)
// this convert the string to an arary 

"digambar bhujbal".split(" "); // ["digambar","bhujbal"] string is seprated from a space 

"love".split(""); //["","o","v","e"] 

"love".split("",2) //["l","o"] limit is passed so it return according to limit 

// includes(substring , fromIndex?) it checks if substring exists and return true or false 


"lucifer".includes("cife"); // true
"lucifer".includes("Cife"); // false (case-sensitive)

"lucifer".includes("ife",2); // false form index defines where to search in string 

// repeat(count)  repeat the string multiple times 
// count must be >=0 
console.log(name.repeat(100))

// concat (srt1,str2,....) joins multiple strings 
let name="digambar"
let surname="bhujbal"

console.log(name.concat(" ",surname));

// indexOf (searchValue , fromIndex?)
// used to search the first index of the substring 

"digambar".indexOf("g") // it return the 2 
"digambar".indexOf("g",4) //  astart searching from the 4th index if not found return -1 


//lastIndexOf(searchValue,fronIndex?) it finds the last occurance of the substring 

"banana".lastIndexOf("a") // 5 other things same as indexOf()

// startsWith(searchString,position)

//endsWith(searchString,positon)

// Converting string to a number 

Number("46") // it returns the number 46
parseInt("44px") // 44 
parseFloat("3.14")  // 3.14 
```
### strings are immutable every method returns new string original string never changed 


## Symbols
helps to create hidden , non colliding object keys 
```js
Symbol("a")===Symbol("a") // false beacuse it create uniqu value every time even with sane decscription 

let secret = Symbol("secretKey");

let user = {
    name: "Digambar",
    [secret]: "This is hidden"
};

```

## Object datatype in js 

### objects are mutable 
it is a collection of the key value pairs 
like name:"digambar",age:20 here key is name and age and values are digambar and 20 
keys are also called properties 
```js

let user={
    name:"digambar",
    age:20,
    password:"this@123"
}

let obj=new Object(); // object is declerd we can add properties letter like obj.name="your_name"

```

### Constructor function
it is a like a blueprint to object . it is used to create and initlize the object 
```js

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



// adding new properties to object 

person["isPassed"]=true;



// deleting the properties of the objects 
delete person1.age;


// so objecrs are mutable 

person1.age=40;

```


### common object methods 
1. object.key(obj)           it returns the keys from the object
2. object.value(obj)         it returns the values from the object 
3. object.entries(obj)       returns array of  key value pairs 
4. object.fromEntries(arr)   turn array of key value pairs back into object 
5. spread operator           creates a copy of a original array or object [...arr1]
6. object.freeze(obj)        freeze the object cannot delete add or modify 
7. object.seal()             cannot add or delete properties but existing can modify 

### looping through the object 
1. for in loop 
   iterates over enumeral property keys

2. for of loop
   iterates over itreable values 
   
### object destructring 
extract value from object and assign them to a vairable in a very consice way 
```js
// without destructring 
let student={
    name:"disgambar",
    course:"bsc computer science"
}

let name=student.name;
let course=student.course;


// using destructring 
let student={
    name:"disgambar",
    course:"bsc computer science"
}

let {name,course}=student


```

### methods inside object 
```js
const chor={
    work:"robbery",
    chori(){
        console.log("robbery sucessful")
    }
}

chor.chori()

// here chori is a method inside a chor object 

```
### this keyword 
inside a  method this refers to the object that called it .
```js

const chor={
    work:"robbery",
    chori(){
        console.log("robbery sucessful")
        console.log("our work is "+this.work) // here this refers to the object chor
    }
}
chor.chori()

```
### object prototype 
```js 
const bscClass={
    students:80,
    subjects:["dbms","python","js"],
    getAttendance(){
        console.log("everyone is present")
    },
    classStartAt:10,
    classEndAt:2

}

const divA=Object.create(bscClass)

divA.getAttendance()

```


### prototypal inheritance 

this is the js core inheritance model where object inherit directly from other object 
```js
const animal={
    eats:true,
    runs(){
        consol.log("animal runs")
    }
}

const rabbit={
    isveg:true,
    __proto__:animal
}

console.log(rabbit.eats)         //true

rabbit.runs()           //animal runs




// modern approach for this is 

const rabbit=Object.create(animal)
rabbit.isveg=true;
```
here rabbit object inherit from animal object . that means animal is a prototype of rabbit 


## class in the js 
in js classes are templates for creating objects, provide cleaner and redable syntax to handle prototypal inheritance 
```js






```






# Dom start here






 # DOM Manipulation from Basic to Advanced

DOM (Document Object Model) manipulation allows JavaScript to dynamically interact with HTML elements.  
Using DOM methods, we can select elements, modify content, change styles, handle events, and create fully interactive web applications.

---

## 📌 What is the DOM?

When a webpage loads, the browser converts HTML into a structured tree of objects called the **DOM**.  
JavaScript can access and modify this structure in real-time.

Example HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript can modify it dynamically:

```js
document.getElementById("title").innerText = "Welcome";
```

---

# 🟢 1. Selecting Elements

Selecting elements is the first and most important step in DOM manipulation.

```js
// Selection by ID (returns a single element)
let heading = document.getElementById("title");

// Selection by Class Name (returns HTMLCollection)
let items = document.getElementsByClassName("iitem");

// Selection by Tag Name (returns HTMLCollection)
let paragraphs = document.getElementsByTagName("p");

// Query Selector (returns first matching element)
let firstItem = document.querySelector(".iitem");

// Query Selector All (returns NodeList of all matches)
let allItems = document.querySelectorAll(".iitem");
```

### ✅ Best Practice:
Use `querySelector()` and `querySelectorAll()` for modern development.

---

# 🟢 2. Changing Content

You can dynamically update text and HTML content.

```js
// Update visible text
heading.innerText = "Hello World";

// Insert HTML content
heading.innerHTML = "<b>Hello World</b>";

// Update text safely (recommended when not using HTML)
heading.textContent = "Updated Text";
```

### 🔎 Difference:
- `innerText` → respects CSS styling
- `innerHTML` → parses HTML
- `textContent` → safest and fastest for text-only updates

---

# 🟢 3. Changing Styles

### Inline Styles

```js
heading.style.color = "red";
heading.style.backgroundColor = "black";
```

### Using classList (Recommended)

```js
heading.classList.add("active");
heading.classList.remove("hidden");
heading.classList.toggle("dark-mode");
```

### ✅ Why use classList?
It keeps styling inside CSS and makes code cleaner.

---

# 🟢 4. Working with Attributes

Attributes like `id`, `src`, `href`, and `disabled` can be controlled using JavaScript.

```js
// Set attribute
heading.setAttribute("id", "newTitle");

// Get attribute value
let idValue = heading.getAttribute("id");

// Remove attribute
heading.removeAttribute("id");
```

---

# 🟢 5. Creating and Removing Elements

Dynamic element creation is useful for todo apps, chat apps, dashboards, etc.

```js
// Create new element
let newItem = document.createElement("li");

// Add content
newItem.textContent = "New List Item";

// Append to parent
document.querySelector("ul").appendChild(newItem);

// Remove element
newItem.remove();
```

---

# 🟡 6. Event Handling

Events allow user interaction.

```js
let button = document.querySelector("button");

button.addEventListener("click", function() {
  console.log("Button Clicked");
});
```

### Common Events:
- click
- input
- submit
- change
- keydown
- mouseover

---

# 🟡 7. Event Delegation

Instead of adding events to multiple child elements, attach one event to the parent.

```js
let ul = document.querySelector("ul");

ul.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("List Item Clicked");
  }
});
```

### ✅ Benefits:
- Better performance
- Works for dynamically added elements

---

# 🟡 8. Form Handling

Forms are a common real-world use case.

```js
let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload
  
  let inputValue = document.querySelector("input").value;
  console.log(inputValue);
});
```

---

# 🔴 9. Advanced Concepts

## Debounce

Used to limit how often a function executes (useful for search inputs).

```js
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

---

## Throttle

Ensures a function runs at most once in a specified time interval.

```js
function throttle(fn, limit) {
  let waiting = false;
  return function(...args) {
    if (!waiting) {
      fn.apply(this, args);
      waiting = true;
      setTimeout(() => waiting = false, limit);
    }
  };
}
```

---





# 😉Promises in the js 
promises represent a future values . status of promises are Pending , FUllfiled and Rejected 

```js
//syntax of promises in js 
const variable=new Promise((resolve,reject)=>{
    // here we kept async operations 
})

//example 
const fristPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello baby")
    },2000)
})
//consuming promise /using promise 

fristPromise()
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})

//



```
promise methods ..
1.  promise.all() 
    if one promise fail all will fail 
2.  promise.allSetteld()
    no effect if any fail
3.  promise.race()
    frist responce strategy . slowapi fastapi determined 
4.  promise.any() 
    reject only if all fails 

## callback hell problem in js 
```js
//callback is a function passed to another function to be called leter 
 //before callback 

 function fetchdata(callback){
    setTimeout(()=>{
        callback("data reccived")
    })
 }

 fetchdata(result=>{
    console.log(result)
 })


// callbackhell occures when one async operation depends on another async opration 

//example 

getUser(id, function (user) { //get user 
  getOrders(user.id, function (orders) { // from user get orders
    getPayment(orders[0].id, function (payment) { // from orders get payment 
      sendReceipt(payment, function () { //from payment send recipt 
        console.log("Done");
      });
    });
  });
});
```
this is the example of callbackhell we can solve it using various method like a async await ,promises

```js
//professional and clenest way to solve this problem is sync/await

async function processOrder(){
    try{
        const user= await getuser(id)
        const order=await getorder(user.id)
        const payment=await getpayment(order[0].id)
        await sendrecipt(payment)
        console.log("order completed !!!!")
    }
    catch(error){
        console.error(error)
    }
}
```