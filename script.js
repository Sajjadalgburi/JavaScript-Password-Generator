// Assignment Code
var generateBtn = document.querySelector("#generate");

const numberChars = "0123456789";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const specialChars = "!@#$%^&*()";

var allChars = numberChars + upperChars + lowerChars + specialChars;

function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to be?"
  );
  var lowerCase = confirm(
    "Would you like your password to contain lowercase letters?"
  );
  var upperCase = confirm(
    "Would you like your password to contain uppercase letters?"
  );
  var numeric = confirm(
    "Would you like your password to contain numeric characters?"
  );
  var special = confirm(
    "Would you like your password to contain special characters?"
  );

  passwordLength = Number(passwordLength);

  if (passwordLength <= 8 || passwordLength >= 128) {
    window.alert("Password must be between 8 and 128 characters");
    return;
  }

  console.log("Testing... Your Pass lenght is " + passwordLength);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
