// Assignment code here
var chars = 8;
var Answer =[];

var specialChars = ['!',"#", "$", "%", "&", "(", ")", "*", "+","-", ".", "/", "/",":",";","<","=",">","?","@","[","\"","]", "^","_",",'~',"];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompt();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
  var newPassword = generatePassword(); //define generate function
  passwordText.value = newPassword; //displays password
  }else{
    passwordTest.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < chars; i++) {
    var randomNumber = Math.floor(Math.random()* Answer.length);
    password = password + Answer[randomNumber];
  }
  return password;
}

function getPrompt()  {
  Answer =[];
  chars = parseInt(prompt("How Many characters do you want your password? between 8-128 characters."));
  if (isNaN(chars) || chars < 8 || chars > 128){
    alert( "Must be a number between 8-128 characters");
    return false;
  }

  if(confirm("Would you like lowercase letters in your password?")){
    Answer = Answer.concat(lowerCase);
  }

  if(confirm("Would you like UPPERCASE letters in your password?")){
    Answer = Answer.concat(upperCase);
  }

  if(confirm("Would you like special characters in your password? '!,#,$'etc.")){
    Answer = Answer.concat(specialChars);
  }

  if(confirm("Would you like numbers in your password?")){
    Answer = Answer.concat(numbers);
  }
  return true;
}