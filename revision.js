// 🟢 LEVEL 1 — Core Logic & Basics
// 1. Reverse a String

// Write a function that reverses a string without using .reverse().

//using .reverse() function




// let name="digambar"
// let rname=name.split("").reverse().join("")
// console.log(rname)
// console.log(name.length)






//without using reverse function

function rev(name) {
    let i = name.length - 1;
    let rname = ""
    while (i >= 0) {
        rname = rname + name[i];
        i--;
    }
    return rname
}

let revname = rev("digambar");

console.log(revname)




// 2. Palindrome Checker

// Check if a string is palindrome (ignore spaces & case).

// let name="  m o m "
// let check="M O M "
// let rname=name.split("").reverse().join("")

// if(name.toLowerCase().replaceAll(" ","")==check.toLowerCase().replaceAll(" ","")) console.log("palindrome")
// else {console.log("not palindrome")}

// 3. Count Vowels

// Return number of vowels in a string.

let name = "digamber"
var count = 0
for (let i = 0; i <= name.length; i++) {

    if (name[i] === "a" ||
        name[i] === "e" ||
        name[i] === "i" ||
        name[i] === "o" ||
        name[i] === "u" ||
        name[i] === "A" ||
        name[i] === "E" ||
        name[i] === "I" ||
        name[i] === "O" ||
        name[i] === "U") { count++ }
}
console.log(count)


// 4. FizzBuzz

// Print numbers 1–100:

// Multiple of 3 → "Fizz"

// Multiple of 5 → "Buzz"

 // Both → "FizzBuzz"

// let i = 0;
// for (i = 0; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")

//     }
//     else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }


// 5. Find Largest Number in Array

// Without using Math.max().

// 6. Remove Duplicates

// Remove duplicates from an array without using Set.

// 7. Flatten Nested Array

// Input: [1,[2,[3,4]],5]
// Output: [1,2,3,4,5]

// 8. Find Second Largest Number
// 9. Anagram Checker

// Check if two strings are anagrams.

// 10. Character Frequency Counter

// Return object like:

// "hello" → {h:1, e:1, l:2, o:1}

// 🟡 LEVEL 2 — Functions, Scope & Closures
// 11. Counter Using Closure

// Create a function that returns:

// const counter = createCounter();
// counter(); // 1
// counter(); // 2

// 12. Custom map()

// Write your own implementation of Array.prototype.map.

// 13. Custom filter()
// 14. Custom reduce()
// 15. Debounce Function

// Create a debounce utility.

// 16. Throttle Function
// 17. Memoization Function
// 18. Curry Function

// Convert:

// add(1,2,3)


// into

// add(1)(2)(3)

// 19. Implement once()

// Function runs only once no matter how many times called.

// 20. Infinite Sum
// sum(1)(2)(3)(4)() → 10

// 🔵 LEVEL 3 — Objects & Prototypes
// 21. Deep Clone an Object

// Without JSON methods.

// 22. Implement bind()

// Write custom myBind.

// 23. Implement call()
// 24. Implement apply()
// 25. Create Constructor Function

// Create User(name, age) with prototype method.

// 26. Prototype Inheritance

// Create Animal → Dog inheritance using prototype.

// 27. Implement Private Variable

// Using closure inside constructor.

// 28. Convert Object to Query String
// {a:1,b:2} → "a=1&b=2"

// 29. Group Array by Property

// Input:

// [{age:20},{age:20},{age:30}]


// Output:

// {20:[...],30:[...]}

// 30. Deep Compare Two Objects
// 🔴 LEVEL 4 — Asynchronous JavaScript

// This is where JS becomes electric ⚡

// 31. Simulate setTimeout

// Write your own timeout using Promise.

// 32. Promisify a Callback Function
// 33. Retry API Call

// Retry a failed async function 3 times.

// 34. Create Promise.all Implementation
// 35. Create Promise.race
// 36. Async Queue

// Process async tasks one by one.

// 37. Limit Concurrent Promises

// Run max 2 promises at a time.

// 38. Implement Sleep Function
// await sleep(2000)

// 39. Build Event Emitter Class
// 40. Predict Output

// Write small async code snippets and predict order.

// 🟣 LEVEL 5 — DOM Challenges
// 41. Create Todo App (No framework)
// 42. Debounced Search Input
// 43. Infinite Scroll
// 44. Drag & Drop Cards
// 45. Stopwatch
// 46. Modal Popup
// 47. Image Slider
// 48. Form Validation
// 49. Dark Mode Toggle (Persist in localStorage)
// 50. Build Mini Router (Hash based)
// 🟤 LEVEL 6 — Real World Challenges
// 51. Build Custom State Manager (like mini Redux)
// 52. Implement Virtual DOM Diff (basic)
// 53. Create LRU Cache
// 54. Rate Limiter Function
// 55. Deep Freeze Object
// 56. Write Polyfill for flat()
// 57. Implement Observer Pattern
// 58. Create Custom Fetch Wrapper
// 59. Build Pagination Utility
// 60. Build Simple Template Engine