var database = [
    {
        username: "Dmytro",
        password: "apple1"
    },
    {
        username: "John",
        password: "123"
    },
    {
        username: "Mary",
        password: "777"
    },
];


// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
    {
        username: "John",
        timeline: "John's April 2020 "
    },
    {
        username: "Dmytro",
        timeline: "Dmytro's April 2020"
    },
    {
        username: "Mary",
        timeline: "Mary's April 2020"
    },
];


function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if (user === database[i].username &&
            pass === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsfeed);
    }
    else
        alert("Sorry, wrong credentials.")
}
// if (user === database[0].username &&
//     pass === database[0].password) {
//     console.log(newsfeed);
// } else {
//     console.log("Sorry, wrong credentials.");
// }


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
