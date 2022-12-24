let readlineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;

let userName = readlineSync.question("What's your name - ");
console.log(kuler(`\nHello ${userName} welcome to Quizify`,"#dc2626"));

console.log("\nPlease select any options by typing either a/b/c/d\n");

/**Creating data set */
const database = {
    data : [
        {
            question : `let a = {}, b = {}
console.log(a == b)
console.log(a === b)`,
            options :{
                a: "false false",
                b: "false true",
                c: "true false",
                d: "true true"
            },
            correctAnswer: "a"
        },
        {
            question : `Object.assign(target, source) creates which type of copy?`,
            options :{
                a: "Deep Copy",
                b: "Shallow Copy",
                c: "Nested Copy",
                d: "Creates a new reference"
            },
            correctAnswer: "b"
        },
        {
            question : `Is method chaining possible with forEach?`,
            options :{
                a: "Yes",
                b: "No"
            },
            correctAnswer: "b"
        },
        {
            question : `let a = {}, b = {}
console.log(a != b)
console.log(a !== b)`,
            options :{
                a: "false false",
                b: "false true",
                c: "true false",
                d: "true true"
            },
            correctAnswer: "d"
        },
    ],
};

/**Creating Leader Board */
const leaderBoard = {
    data : [
        {
            name :'Horler',
            score: 1,
        },
        {
            name :'Shiv',
            score:2,
        },
        {
            name :'Sia',
            score:3,
        },
        {
            name :'Shivani',
            score:4,
        },
        {
            name :'Aman',
            score:1,
        }
    ],
};

function playGame(userAnswer, correctAnswer){
    if(userAnswer === correctAnswer){
        console.log(kuler("Correct Answer","#059669"));
        score++;
    }
    else{
        console.log(kuler("Incorrect Answer","b91c1c"));
        console.log(kuler(`Correct Answer is ${correctAnswer}`,"1d4ed8"));
    }
}

function showQuestionAndOptions(database){
    for(let i = 0; i < database.data.length; i++){
        console.log(`\nQ${i+1} - ${database.data[i].question}\n`);
        for(let key in database.data[i].options){
            console.log(`${key} - ${database.data[i].options[key]}`);
        }
        let userAnswer = readlineSync.question("Enter your answer - [a/b/c/d] - ").toLowerCase();
        playGame(userAnswer,database.data[i].correctAnswer);
    }
}

function highScorer(leaderBoard){
    leaderBoard.data.push({name: userName, score: score});
    console.log(kuler("\nCheck your Position on the Leader Board","#fde047"));
    let sortedScoreList = leaderBoard.data.sort((a,b)=>b.score - a.score);
    for(let leader of sortedScoreList){
        console.log(kuler(`${leader.name} - Score: ${leader.score}`,"#933ea"));
    }
}


showQuestionAndOptions(database);
console.log(kuler(`\nYour Score is ${score}`,"#5eead4"));
highScorer(leaderBoard);