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
