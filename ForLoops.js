// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// for(let i =1; i<=10; i++){
//    console.log("Comments below");
//     console.log(i);
// }

// for(let num = 1; num<=5; num++){
//     console.log("I LOve yOu");
//     console.log(num)

// for (let i = 1; i <= 20; i+=2){
//     console.log(i)
// }

// for (let i = 10; i<=1000; i*=10){
//     console.log(i)
// }

// const animals = ['lions', 'tigers', 'bears'];

// for ( let i= animals.length - 1; i >= 0; i--){
//     console.log(animals[i]);
// }

// for(let i = 0; i <=10; i++){
//     console.log(`i is: ${i}`)
//     for(let j = 1; j< 4; j++) {
//         console.log(`  j is: ${j}`)
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]


// for(let i = 0; i < seatingChart.length; i++){
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for(let j = 0; j<row.length; j++){
//         console.log(row[j])
//     }
// }

// for(let row of seatingChart){
//     for(let student of row){
//         console.log(student);
//     }
// }
// let count = 0;
// while(count < 10){
//     count++;
//     console.log(count);
    
// // }

// const SECRET = "BabyHippo"

// let guess = prompt("enter the secret code");
// while(guess !== SECRET) {
//     guess = prompt("enter the secret code");
// }
// console.log("CONGRATS YOU GOT THE SECRET")
// let input = prompt("Hey, say something")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")

// "hello"
// "hello"
// "stop copying me"


// for(let i = 0; i < 1000; i++) {
//     console.log(i);
//     if(i === 100) break;
// }

// let maximum = parseInt(prompt("Enter the maximum number"));
// while (!maximum) {
//      maximum = parseInt(prompt("Enter a valid number"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;


// let guess = parseInt(prompt("Enter your first guess"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if(guess === 'q') break;
//     attempts++;
//     if(guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:")
//     } else {
//         guess = prompt("Too low! Enter a new")
//     }
// }
// if(guess === 'q'){
//     console.log("Quitter")
// } else {
// console.log(`YOU GOT IT!! It took you ${attempts} guesses`)
// }

// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics']

// for(let i = 0; i < subreddits.length; i++){
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for(let subreddit of subreddits){
//     console.log(`Visit reddit.com/r/${subreddit}`)
// }



// for (let char of "hello world") {
//     console.log(char)
// }

// const numbers = [1,2,3,4,5,6,7,8,9];

// for (let square of numbers){
//     console.log(`${square * square}`)
// }

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
// }
// let total = 0
// let scores = Object.values(testScores);
// for ( let score of scores) {
//     total += score;
// }
// console.log(total / scores.length)
