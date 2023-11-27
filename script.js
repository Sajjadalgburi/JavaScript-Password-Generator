// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define character sets
const numberChars = "0123456789";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const specialChars = "!@#$%^&*()";

// Combine all character sets into one string
var allChars = numberChars + upperChars + lowerChars + specialChars;
function generatePassword() {
  var passwordLength;

  // Keep prompting the user until a valid numeric input is provided
  while (true) {
    // Prompt the user for password length
    var input = prompt(
      "How many characters would you like your password to be?"
    );

    // Convert the input to a number
    passwordLength = Number(input);

    // Check if the input is a valid number and within the specified range
    if (!isNaN(passwordLength) && passwordLength > 8 && passwordLength < 128) {
      break; // Exit the loop if the input is valid
    } else {
      // Alert the user if the input is not a valid number or not within the allowed range
      window.alert("Please enter a valid number between 8 and 128.");
    }
  }

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

  // Log the password length for testing purposes
  console.log("Testing... Your Pass length is " + passwordLength);
}

// Call the function to generate the password
generatePassword();

// Function to write the generated password to the #password input field
function writePassword() {
  var password = generatePassword(); // Generate a password
  var passwordText = document.querySelector("#password"); // Select the password input field

  // Set the value of the password input field to the generated password
  passwordText.value = password;
}

// Add event listener to the generate button, triggering the password generation
generateBtn.addEventListener("click", writePassword);
