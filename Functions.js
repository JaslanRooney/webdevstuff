// function sing(){
//     console.log("DO")
//     console.log("RE")
//     console.log("MI")
// }

// function greet(){
//     console.log("hi")
// }
// greet();
// function greet(firstName){
//     console.log(`Hey there, ${firstName}`)
// }

// greet('Elvis')

// function rant(message){
    
//     console.log(`${message}`)
//     console.log(`${message}`)
//     console.log(`${message}`)
// }
// rant("I hate beets")

// function greet(firstName, lastName){
//     console.log(`Hey there, ${firstName} ${lastName[0]}`);

// }
// greet('George', 'Clooney')


// function repeat(str, numTimes){
//     let result = '';
//     for(let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result);

// const yell = " i love you".toUpperCase

// function add(x,y){
//     if(typeof x !== 'number' || typeof y !== 'number'){
//         return false;
//     } 
//         let sum = x + y
//     return sum;
   
// }

// function isShortsWeather(temperature){
//     if(temperature => 75);
//     return true;
// }

// function lastElement(){
//     return lastElement[].indexOf;
// }
// lastElement([3,5,7])












// function callTwice(func){
//     func();
//     func();
// }

// function callTenTimes(f){
//     for(let i = 0; i < 10; i++ ){
//        f() 
//     }
// }

// function rollDie(){
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTwice(rollDie)


// function makeMystertFunc(){
//     const rand = Math.random();
//     if(rand > 0.5){
//         return function(){
//             console.log("CONGRATS! I AM A GOOD FUNCTION")
//             console.log("YOU WIN A MILLION DOLLARS!!")
//         }
//     } else {
//         return function(){
//             alert("YOU HAVE BEEN INFECTED BY A VIRUS")
//             alert("STOP TRYING TO CLOSE THIS WINDOW")
//             alert("STOP TRYING TO CLOSE THIS WINDOW")
//             alert("STOP TRYING TO CLOSE THIS WINDOW")
//             alert("STOP TRYING TO CLOSE THIS WINDOW")
//             alert("STOP TRYING TO CLOSE THIS WINDOW")
//         }
//     }
// }

// function makeBetweenFunc(min, max){
//     return function(num){
//        return num >= min && num <= max;
//     }
// }
// makeBetweenFunc(100,200)



// makeBetweenFunc(5,10) =>

// function isBetween(num){
//     return num >=50 && num <= 100
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }

// const myMath = {
//     PI: 3.14,
//     square: function(num){
//         return num * num;
//     },
//     cube: function(num){
//         return num ** 3;
//     }
// }


// const myMath = {
//     PI: 3.14,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3
//     }
// }

// const cat = {
//     name: "Blue",
//     color: "grey",
//     breed: "scottish",
//     meow(){
//         console.log(`${this.name} says meowwww`);
//     }
// }



// try {
//     hello.toUppercase();
// } catch{
//     console.log("error")
// }
// console.log("AFTER!")


// function yell(msg) {
//     try{
//     console.log(msg.toUpperCase().repeat(3));
// } catch (e) {
//     console.log(e);
//     console.log("please pass a string")
// }
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// numbers.filter(n => {
//     return n < 10
// })

// const doubles = numbers.map(function(num){
//     return num * 2;
// })

// // function print(element){
// //     console.log(element)
// // }
// numbers.forEach(function (el) {
//     if( el % 2 ===0) {
//     console.log(el)
// }
// // })

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand by Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]
// movies.map(movie => {
//     return `${movie.title} ("year") is rated ${movie.score}}`
// })

movies.map(({ title, score }) => {
    return `${title} is rated ${score}`
})




// movies.filter(movie) => movies.score >= 90
// movies.filter(({ score }) => score >= 90)
 // const best = movies.reduce((bestMovie, currMovie)=>{
//     if(currMovie.score>bestMovie.score) {
//         return currMovie;
//     }
//     return bestMovie;
// })

// const evens = [2,4,6,8];
// evens.reduce((sum, num) => sum + num, 100)



// movies.some(movies => movies.score = 99)

// const greatMovies = movies.filter(m => m.score > 94)
// const greatTitles = greatMovies.map(m => m.title)
// const mehMovies = movies.filter(m => m.score < 90)

// movies.filter(m => m.score > 94).map(m => m.title)


// // const newMovies = movies.map(function(movies){
// //     return `${movies.title} - ${movies.score / 10}`
// // })

// const newMovies = movies.map(movies => (
//     `${movies.title} - ${movies.score / 10}`
     
//     ))
// const title =  movies.map(function(movie){
//    return movie.title.toUpperCase();
// })

// movies.forEach(function (movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })



// const add = function(x,y) {
//     return x + y;
// }

// const add = (x,y) => {
//     return x + y;
// }

// const square = x => {
//     return x ** 2;
// }
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// } 
// const rollDie = () =>  Math.floor(Math.random() * 6) + 1
       
    
// const add = (a, b) =>  a + b;



// const greet = (name) => {
//     return "Hey" + ` ${name}!`
// }
// console.log("HELLO!!")
// setTimeout(() => {
//     console.log("...are you still there??")
// }, 3000)
// const id = setInterval(() => {
// console.log(Math.random())
// }, 2000); 

// const exams = [80, 89, 90, 99, 66]

// exams.some(score => score>= 75)



// const prices = [9.99, 1.50, 19.99, 49.99, 30.5]

// const minPrice = prices.reduce((min, price) => {
//     if (price < min){
//         return price;
//     }
//     return min;
// })

// const total = prices.reduce((total, price) => {
//     return total + price
// })

// const total = prices.reduce((total, price) => total + price
     



// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)


// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function() {
//         setTimeout(() => {
//             console.log(this);
//             console.log(this.fullName())
//         }, 3000)
//     }
// // }

// function rollDie(numSides){
//     }
//     return Math.floor(Math.random() * numSides) + 1 
// }

// function multiply(a,b = 1) {
//     return a * b;
// }


// function rollDie(numSides = 6){
//     return Math.floor(Math.random() * numSides) + 1 
// }

// const cats = ['Blue', 'Rusty'];
// const dogs = ['BooBoo', 'Willy'];

// const allPets = [...cats, ...dogs]


// const feline = { legs:4, family: 'Feidae'};
// const canine = { isFurry: true, family: 'Caninae'}

// const catDog = {...feline, ...canine}


// const user = {
//     fullname: 'Harvey Milk',
//     email: 'bluman@gmail.com',
//     password: 'tobias13',
//     username: 'tfunke',
//     born: 1980,
//     married: 2016
// }
// function username({email, born}){
//     return `${username} ${born}`
// }
// const { email, password, username, born } = user;






// }
// const newUser = {...dataFromForm, id: 2345, isAdmin: false}

// function sum(){
//    return arguments.reduce((total, el) => total + el)
// }
// sum(3,4,5,6,7,8,9,8,7,6)

// function sum(...nums){
//     return nums.reduce((total, el) => total + el)
// }

// function raceResults(gold, silver, ...everyOneElse){
//     console.log(`"Gold medal goes to:" ${gold}`)
//     console.log(`Silver goes to: ${silver}`)
//     console.log(`and thanks to everyone else: ${everyOneElse}`)
// }

// const scores = [9999, 8888, 7777, 6666, 5555];

// const highScores = scores[0];
// const secondHighScores = scores[1];


// const [gold, silver, bronze, ...allOthers] = scores

