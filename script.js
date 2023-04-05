var generateBtn = document.querySelector("#generate");
// Assignment Code

function generatePassword() {
    let userInput = parseInt(prompt('Enter password length'));
    let num = confirm('Include numbers?');
    let specialCharacters = confirm('Include special characters?');
    let lowerCase = confirm('Include lower case letters?');
    let upperCase = confirm('Include uppercase letters');

    let passCriteria;


      if(userInput < 8 || userInput > 128 || isNaN(userInput)) {
        alert('Invalid password length');
        // return "Invalid password length"
        generatePassword()
      
      }

      if(!lowerCase && !upperCase && !specialCharacters && !num) {
        alert('Please select a character type');

        generatePassword ()

      }

      
      
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
