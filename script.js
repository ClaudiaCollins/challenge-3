// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength = 8;
var characterArr = [];
var lowerCaseArr = 
var specialArr = !, @, #, $, %, ^, &, *, (, )
var numberArr = 
function generatePassword() {
  
  //prompt the user for the password criteria
  //a. passwrod length 8-128
  //b. lc, uc, special characters, numbers
  //validate the input 
  //generte password based on criteria
  //display generated password
  
  
  
  
  return "generated password"
}

generatePassword();

// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
