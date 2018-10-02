var reverseText = document.getElementById('textReversing');
var reverseWord = document.getElementById('wordsReversing');
var telegramText = document.getElementById('telegram');
var binaryText = document.getElementById('binary');
    
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

//Binary style function
function binaryFunction() {
var userTextMessage = document.getElementById("message").value;
var binaryReplacement = userTextMessage.split("").map(function(char){
    return "0" + char.charCodeAt(0).toString(2);
});

if (userTextMessage == "") {
    alert("Please write the message");
} else { document.getElementById("toReplace").textContent = binaryReplacement.join("");
  }  
       }

/*else {
     function wordToBin(userTextMessage){  
return userTextMessage.split("").map(function(char){
    document.getElementById("toReplace").textContent = "0" + char.charCodeAt(0).toString(2);
  })     )
}
}};
  */  


reverseText.addEventListener('click', reverseTextFunction);
reverseWord.addEventListener('click', reverseWordsFunction);
telegramText.addEventListener('click', telegramFunction);
binaryText.addEventListener('click', binaryFunction);