var generateBtn = document.querySelector("#generate");
// Assignment Code

//Separated length and character types into two functions to ensure an invalid character type selection (but valid password length) doesn't return prompt series to password length

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

//

  return { num, specialCharacters, lowerCase, upperCase };


}

function generatePassword() {
  let passwordLength = hasPasswordLength();
  let characterTypes = hasCharacterTypes();
  

 
}

  

   

  let passCriteria = {
    num: "1234567890",
    specialCharacters: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    chars: [num, specialCharacters, lowerCase, upperCase],
    minPassLength: 8,
    maxPassLength: 128,
  };

  if (
    minPassLength >= 8 &&
    maxPassLength <= 128(num || specialCharacters || lowerCase || upperCase)
  ) {
    

    return (passCriteria = true);
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
