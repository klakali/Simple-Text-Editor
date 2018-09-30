var reverseText = document.getElementById('textReversing');
var reverseWord = document.getElementById('wordsReversing');
var telegramText = document.getElementById('telegram');
var capitalizeText = document.getElementById('capitalizing');
    
// Reverse function
function reverseTextFunction() {
var userTextMessage = document.getElementById("message").value;
let reversedTextMessage = userTextMessage.split("").reverse().join("");
    
if (userTextMessage == "") {
    alert("Please write the message");
} else { document.getElementById("toReplace").textContent = reversedTextMessage; }
};

/* // Letter capitalizing function
function myFunctionTwo() {
var userTextMessage = document.getElementById("message").value;
let caitalizedMessage = userTextMessage.toUpperCase();
    if (userTextMessage == "") {
    alert("Please write the message");
}
    document.getElementById("toReplace").textContent = caitalizedMessage;
} */
// Reverse each word function
function reverseWordsFunction() {
var userTextMessage = document.getElementById("message").value;
let reversedEachWordsMessage = userTextMessage.split(" ").reverse("").join(" ").split("").reverse().join("");
    
if (userTextMessage == "") {
    alert("Please write the message");
} else { document.getElementById("toReplace").textContent = reversedEachWordsMessage; }
};

// Telegram style function
function telegramFunction() {
var userTextMessage = document.getElementById("message").value;
let telegramTextMessage = userTextMessage.split(" ").join(". ");
    
if (userTextMessage == "") {
    alert("Please write the message");
} else { document.getElementById("toReplace").textContent = telegramTextMessage + "."; }
};

// Capitalize each first letter function
function capitalizeFunction() {
var userTextMessage = document.getElementById("message").value;
let capitalizeTextMessage = userTextMessage.charAt(0).toUpperCase();
    
if (userTextMessage == "") {
    alert("Please write the message");
} else { document.getElementById("toReplace").textContent = userTextMessage.replace(/\w\S*/g, function() {
        return userTextMessage.charAt(0).toUpperCase() + userTextMessage.substr(1).toLowerCase();
    }); }
};


reverseText.addEventListener('click', reverseTextFunction);
reverseWord.addEventListener('click', reverseWordsFunction);
telegramText.addEventListener('click', telegramFunction);
capitalizeText.addEventListener('click', capitalizeFunction);