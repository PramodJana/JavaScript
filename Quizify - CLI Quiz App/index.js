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