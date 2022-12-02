const readLine = require("readline-sync");

const userName = readLine.question("May i know your Name?");

let welcomeMessage = 
`Hello ${userName} 
How may I help you`;

console.log(welcomeMessage);