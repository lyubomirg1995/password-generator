var generateBtn = document.querySelector("#generate");
// Assignment Code

//Separated length and character types into two functions to ensure an invalid character type selection (but valid password length) doesn't return prompt series to password length

//parseInt converts a string to an integer for later comparison using userInput

function hasPasswordLength() {
  let userInput = parseInt(prompt("Enter password length"));

  // Invalid condition for password length; a valid input is implicitly checked

  if (userInput < 8 || userInput > 128 || isNaN(userInput)) {
    alert("Invalid password length");
    return hasPasswordLength();
  }

  return userInput;
}

function hasCharacterTypes() {
  let num = confirm("Include numbers?");
  let specialCharacters = confirm("Include special characters?");
  let lowerCase = confirm("Include lower case letters?");
  let upperCase = confirm("Include uppercase letters");

  // Invalid condition for selecting character types; a valid input is implicitly checked

  if (!lowerCase && !upperCase && !specialCharacters && !num) {
    alert("Please select a character type");
    return hasCharacterTypes();
  }

  //Creates an object for future retrieval via conditional statements

  return { num, specialCharacters, lowerCase, upperCase };
}

//Stores values for use in conditional statements and for loops

function generatePassword() {
  let passwordLength = hasPasswordLength();
  let characterTypes = hasCharacterTypes();

  let possibleCharacters = "";
  let password = "";

  //Stores input of each character type with one function for each in possibleCharacters

  if (characterTypes.num) {
    possibleCharacters += "1234567890";
  }

  if (characterTypes.specialCharacters) {
    possibleCharacters += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }

  if (characterTypes.lowerCase) {
    possibleCharacters += "abcdefghijklmnopqrstuvwxy";
  }

  if (characterTypes.upperCase) {
    possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Concatinates one random position on possibleCharacters string to password in a loop based on userInput in hasPasswordLength function
  // .length property ensures the randomly selected string position does not fall outside of the string's bounds

  for (let i = 0; i < passwordLength; i++) {
    let randomCharIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomCharIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //the .value property generates the password in a textbox for copy and pasting, whereas .placeholder disables copying the text

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
