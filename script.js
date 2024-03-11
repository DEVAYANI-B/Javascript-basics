//printing statement
console.log('hello')
//null and undefined are empty values
//named functions
function add(a, b) {
    return a + b
}
var res = add(1, 2)
console.log(res)
function sub(a, b) {
    return a - b
}
var res = sub(4, 3)
console.log(res)
function mult(a, b) {
    return a * b
}
var res = mult(2, 4)
console.log(res)
function div(a, b) {
    return a / b
}
var res = div(1, 8)
console.log(res)
//anonymous function

var anony = function (a, b) {
    return a - b

};

anony(4, 1);

//ECMA Script (2015) ES6 feature-arrow function was added by this ecma script
//function type2=arrow function

var sub = (a, b) => {
    return a - b
}
var res = sub(5, 4)
console.log(res)
//if statements
var oddeven = (num) => {
    if (num % 2 == 0) {
        return ('even')
    } else {
        return ('odd')
    }

}
var res = oddeven(5)
console.log(res)
//ifelse using ternary operator
var oddeven = (num) => {
    return num % 2 == 0 ? "even" : "odd"

}
var res = oddeven(5)
console.log(res)
//eligibility to vote using arrow function and ternary operator 
var elig = (age) => {
    return age >= 18 ? "eligible" : "not eligible"
}
var res = elig(37)
console.log(res)
//another way to give output without variable res
console.log(elig(11))
//HOISTING
//not declared variable shows undefined
//hoisting of var shows undefined
//utility to access a variable before even initialising it is known as hoisting
//internally var x = undefined will be assigned by the system
console.log(x)
var x = 10
//var,let,const for creating variables
// let
let a = 10
console.log(a)
//const
const b = 20
//reasssignment to const variable is not possible but to let is possible
//const b=30
console.log(b)
//reddeclaration of const variable is not possible,also not possible for let but possible for var
//let a=30//not possible
//var a=5//possible
//hoisting for let shows reference error
//console.log(z)
//let z=10
//hoisting for const shows reference error
//console.log(c)
//const c=55
/*scope
local,
global=,
block=let and const
function scope=var
*/
//function scope is also called local scope
//block scope example
const d = 25
if (true) {
    //block scope variable
    var blockVariable = 'i am a block variable'
    const constantVariable = 'i am a constant'
    console.log(blockVariable)
    console.log(constantVariable)

}
console.log(blockVariable)
//console.log(constantVariable)//script.js:108  Uncaught ReferenceError: constantVariable is not defined
//at script.js:108:13
//function scope example using var
//not all functions are block scope
//but all block are functions scope
function fn() {
    let x = 10
    console.log(x)
}
console.log(x)
/*function fn2 (){
    var y=10
    console.log(y)
}
console.log(y)*/
/*script.js:123  Uncaught ReferenceError: y is not defined
at script.js:123:13*/

//here var can be accessed only within function not outside it
//block and let can be accessed outside func

console.log(1 === '1')//strict equal operator 
//implicit type conversion
console.log(1 - '20hi')//NaN //not anumber is o/p
console.log(1 + '20')//120//concatenate
console.log(1 - '20')//-18//changes to arithmetic
console.log(1 + '20hi')//120hi//concatenate

//ARRAYS
var arr = [1, 2, 3]//type1 of creating array
var newarr = new Array(6, 7, 8)//type2 of creating array
console.log(arr[0])
//array here is a collection of values with any datatypes
const arr2 = ['hi', 1, 2, 3]
console.log[arr[0]]

//ARRAY METHODS
arr.push('hello')
console.log(arr)
//arrpop
const last = arr.pop()
console.log(last, arr)
//push:insert at end
//pop:remove from end
//unshift:to insert at front
//shift:remove from front

//SPLICING
var myarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var splice = myarr.splice(3, 6)//here 3 is starting index then  6 is number of elemnts 
console.log(splice)//3,4,5,6,7
console.log(myarr)
//splice2
var myarr2 = [1, 2, 3, 4, 5]
myarr2.push(6, 7, 8, 9, 10)
var splice2 = myarr2.splice(0, 4)
console.log(splice2)
console.log(myarr2)

//ITERATING ARRAYS- for...of loop
var arr = [1, 2, 3]
for (var element of arr) {
    console.log(element / 2 + 10)
}
//if element present in array then loop runs
//prgrm to print a num array 
/* var arr=[1,2,3]
i=0
for (var element of arr){
    element%2 == 0 ?arr[i]='even' : arr[i]='odd'
    i++
}
console.log(arr) */

//using function

const oddeve = (arr) => {
    let ar = []
    for (var i of arr) {
        i % 2 == 0 ? ar.push("Even") : ar.push("Odd")
    }
    return ar
}
console.log(oddeve([11, 2, 20]))

//HIGHER ORDER FUNCTIONS
//type1 function accepts another function as argument
function fun1(a) {
    console.log("executing H-O func..start ")
    a();
    console.log("executing H-O function end")
}
function fun2() {
    console.log("function 2 is excuted")
}
fun1(fun2)

//type-2 FUNCTION AS A RETURN VALUE IN H-O
function multi(fact) {
    return function (number) {
        return number * fact
    }
}
var multi2 = multi(2)
console.log(multi2(5))
var multi3 = multi(3)
console.log(multi3(5))
multi(4)(5)

// callback functions
//the function 2 which calls back its previous function is called callback functions

//27-02-2024-TUESDDAY

//ARRAY METHODS
const ar4 = []
let arn = []
ar4.push(1, 2, 3)
ar4.forEach((el) => {
    var el2 = el * 2

    arn.push(el2)

}
)
console.log(arn)

//oddeven using foreach
const ar3 = [1, 2, 3, 4]
let arnew = []
ar3.forEach((el1) => {
    el1 % 2 == 0 ? arnew.push('Even') : arnew.push('Odd')

})
console.log(arnew)
//map function can be used instead of foreach because there's no need to create an array seperately for answer array
const arrr = [1, 2, 3]
const resn = arrr.map((eln) => {
    return eln * 2
})
console.log(resn)
//odd even using map
const arrar = [1, 2, 3]
const result = arrar.map((elemen) => {
    return (elemen % 2 == 0) ? elemen : 'Odd' //odd,2,odd
})
console.log(result)
//the above example using map type 2
const oddevenn = (ara) => {
    const re = ara.map((elem) => {
        return elem % 2 == 0 ? elem : "odd"
    })
    return re
}
const ara = [1, 2, 3]
console.log(oddevenn(arr))

//these map and foreach functions are also higher order functions
//if single statement returned inside arrow function then no need return keyword and parantheses

//FILTER ARRAYMETHOD
const filtereven = (arrnew) => {
    const resnew = arrnew.filter((elee) => {
        return elee % 2 == 0
    })
    return resnew
}
const arrnew = [1, 2, , 3, 4, 5, 6]
console.log(filtereven(arrnew))
//new example for filter
const filt = (arneew) => {
    const rest = arneew.filter((ell) => {
        return ell > 0
    })
    return rest
}
const aree = [-4, -3, 0, 7, -9, 10, 2]
console.log(filt(aree))

//sorting using sortArray method of arrays

const dd = [3, 11, 4, 1, 50, 6]
const ee = dd.sort((e, f) => {
    return f - e

})
console.log(ee)
//the normal sorting is wrong becoz it sorts based on strings
//asci basedd sorting-normal ssorting but using above method callback and sort properly using e-f foe ascending and f-e for descending

const xx = [1, 2, 3]
const y = [...xx]
xx.push(9)
console.log(xx, y)

//another type of spread operation
const g = [1, 3, 5, 6, 77]
const h = [2, 8, 10, 11]
const i = [...g, 9, ...h]
console.log(i)

//OBJECTS
var person = {
    firstname: "tony",
    lastname: "stark"
}
person.age = 23
person["salary"] = 50000
console.log(person)

//for in loop(objects)

for (var key in person) {
    console.log(key + ":" + person[key])
}
const obj = {
    firstname: "Tony",
    lastname: "Stark",
    marks: {
        math: 80,
        cs: 90,
        physics: 70
    }
}
var sub = "math"
console.log(obj.firstname + " " + obj.lastname + "'s " + sub + " mark is " + obj.marks.math)
//do this when asked to create string using string literals
console.log(`${obj.firstname} ${obj.lastname}'s ${sub} mark is ${obj.marks[sub]}`)//back tick ` operator for creating string can be used when dynamic values are to be created and can be done using dollar and curlybrackets

//const obj1={a:10,b:20}
// const obj2 = { x: 1...obj1, c: 40, x: 5 }
// obj.b = 30
// console.log(obj1, obj2)
//destructuring








// const objn = {
//     firstn: 'tony',
//     lastn: 'stark',
//     age: 45,
//     height:6.1
// }
// const{fristn:f,lastn:l,age=20}=objn
// console.log(age)

//ARRAY OF OBJECTS//Return names array only
const students=[{name:"Tony",agee:45,grade:9.1},
{name:"john",agee:30,grade:8},
{name:"smith",agee:28,grade:8.5}]
//name array with grade based sorted
const ress= students.sort((a,b)=> b.grade-a.grade).map(res1=>res1.name)
//names whose grade>8.2
const res2= students.filter(ob=>ob.grade>8.2).map(res1=>res1.name)
const high=ress[0]
console.log(res2)//name with grade>8.2
console.log(ress)//all name
console.log(high)//highestgrade name
//sort,cconvert to array of strings for output to come as name array
console.log(res2.join(','))//return as string rather than array

//DOM Manipulation
function handlebtnclick(){
    const btn = document.getElementById('start-btn')
   btn.innerHTML=btn.innerHTML==='START'?'FINISH':'START'
   const count = document.getElementById('count')
   count.innerHTML= (count.innerHTML*1)+1
    
}

function handlebtnclick2()
{document.getElementById('login-btn').innerHTML='LOGOUT'}

//TASK 27-02-2024
//Qn given in Class
const numy=[null,0,NaN,true,false,'','1',2,3,undefined,10];
const resy=numy.filter(ele=>ele);
console.log("output : ")
console.log(resy);

//Count Words in a Sentence:
var str="The quick brown fox";
const arrz=str.split(" ");
console.log("output : "+arrz.length);

//Capitalize the First Letter of Each Word:
var str1="hello world!";
const arrr1=str1.split(" ");
var newstr="";
for(var word of arrr1){
    newstr=newstr+" "+word.replace(word[0],word[0].toLocaleUpperCase());
}
console.log("o/p: "+newstr);

//Reverse words in a sentence:
var str2="The quick brown fox";
var arrr2=str2.split(" ");
var len=arrr2.length;
var newarrr=arrr2.reverse();
var revstr="";
for(var word of newarrr){
    revstr=revstr+" "+word;
}
console.log("op : "+revstr);

//Reverse the whole sentence:
reversestr="Hello world";
const sp=reversestr.split("");
var letter=sp.reverse();
console.log("output : "+letter.join(""));

//Find the longest word in the sentence:
var lstr="The quick brown fox is jumping over the lazy dog";
const larr=lstr.split(" ");
var max=0;
var longword;
for(var word of larr){
    var wordlen=word.length;
    if(wordlen>max){
        max=wordlen;
        longword=word;
    }
}
console.log("o/p : "+longword);

//set timeout, set interval in callback threads
//js is single threaded

//SET TIMEOUT
//synchoronous and asynchorous 
console.log("executing first main thread")
setTimeout(()=>{
    console.log("delay of 2 sec")
},2000)
console.log("prints soon after start")

//set interval
console.log("START")
var aa=1
const interval= setInterval(()=>{
    console.log(aa++)
    if(aa==6) {
        clearInterval(interval)}
},1000)
console.log("END")





