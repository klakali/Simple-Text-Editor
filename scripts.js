var reverseText = document.getElementById('textReversing');
var reverseWord = document.getElementById('wordsReversing');
var telegramText = document.getElementById('telegram');
    
// Reverse function
function reverseTextFunction() {
var userTextMessage = document.getElementById("message").value;
let reversedTextMessage = userTextMessage.split("").reverse().join("");
    
if (userTextMessage == "") {
    alert("Please write the message");
} else { document.getElementById("toReplace").textContent = reversedTextMessage; }
};

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

reverseText.addEventListener('click', reverseTextFunction);
reverseWord.addEventListener('click', reverseWordsFunction);
telegramText.addEventListener('click', telegramFunction);
capitalizeText.addEventListener('click', capitalizeFunction);