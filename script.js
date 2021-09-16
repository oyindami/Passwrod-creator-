// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatepassword(){
  var password = window.prompt("enter password length?");
  var value;
  
  if(password.length < 8) {
    alert("error!")
  }
  return('');

  if()
    
  }
// arrays for password options//
var choices =[lowercase, numbers]
var lowercase = 'qwertyuiopasdfghjklzxcvbnm'
var uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
var numbers = '1234567890'
choices [Math.floor(Math.random()*choices.length)
}
]
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
