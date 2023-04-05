var generateBtn = document.querySelector("#generate");
// Assignment Code

function generatePassword() {
    let userInput = prompt('Enter password length');
    let num = confirm('Include numbers?');
    let specialCharacters = confirm('Include special characters?');
    let lowerCase = confirm('Include lower case letters?');
    let upperCase = confirm('Include uppercase letters');

    let passCriteria;
       if(minPassLength >= 8 && maxPassLength <= 128 (num || specialCharacters || lowerCase ||upperCase)) {
        passCriteria = {
          num: "1234567890",
          specialCharacters: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
          lowerCase:"abcdefghijklmnopqrstuvwxyz",
          upperCase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          chars: [num, specialCharacters, lowerCase, upperCase],
          minPassLength: 8,
          maxPassLength: 128, 
        }
        
    return passCriteria = true;
        
      }
  
  
}; 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
