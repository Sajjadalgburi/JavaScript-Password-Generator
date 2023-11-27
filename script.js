// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define character sets
const numberChars = "0123456789";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const specialChars = "!@#$%^&*()";

// Combine all character sets into one string
var allChars = numberChars + upperChars + lowerChars + specialChars;

// Function to generate a password based on user input
function generatePassword() {
  // Prompt the user for password length
  var passwordLength = prompt(
    "How many characters would you like your password to be?"
  );

  // Confirm user preferences for password composition
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

  // Convert password length to a number
  passwordLength = Number(passwordLength);

  // Check if the password length is within the specified range
  if (passwordLength <= 8 || passwordLength >= 128) {
    // Alert the user if the length is not within the allowed range
    window.alert("Password must be between 8 and 128 characters");
    return; // Exit the function
  }

  // Log the password length for testing purposes
  console.log("Testing... Your Pass length is " + passwordLength);
}

// Function to write the generated password to the #password input field
function writePassword() {
  var password = generatePassword(); // Generate a password
  var passwordText = document.querySelector("#password"); // Select the password input field

  // Set the value of the password input field to the generated password
  passwordText.value = password;
}

// Add event listener to the generate button, triggering the password generation
generateBtn.addEventListener("click", writePassword);
