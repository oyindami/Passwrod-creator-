// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var special = "!#$%&()*+-./:;<=>?@^_`";
var num = "1234567890";
//variable to allow user code to concacnate different options
var choices;
//variable to save all tghe user true options

// Add event listener to generate button
generateBtn.addEventListener("click", generatepassword);

function generatepassword() {
  var passwordlength = prompt(
    "enter password length; choose between 8 and 128 character length"
  );
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Wrong password length");
    return generatepassword();
  } else {
    var lowercasepassword = confirm("Require lowercase letters?");
    var uppercasepassword = confirm("Require Uppercase letters?");
    var numberspassword = confirm("Require numbers?");
    var specialpassword = confirm("Require Special Characters?");
  }
  //the next step series of ifelse statement that based on the confirm statement above
  // to display option when the user picks true for two options and concat choices creating an array
  if (lowercasepassword && uppercasepassword) {
    choices = lowercase.concat(uppercase);
  } else if (numberspassword && uppercasepassword) {
    choices = num.concat(uppercase);
  } else if (numberspassword && specialpassword) {
    choices = num.concat(special);
  } else if (specialpassword && lowercasepassword) {
    choices = special.concat(lowercase);
  } else if (uppercasepassword && specialpassword) {
    choices = uppercase.concat(special);
  } else if (lowercasepassword && numberspassword) {
    choices = lowercase.concat(num);
  }
  //else if statement to join option of three true choices
  else if (lowercasepassword && uppercasepassword && numberspassword) {
    choices = lowercase.concat(uppercase, num);
  } else if (lowercasepassword && uppercasepassword && specialpassword) {
    choices = lowercase.concat(uppercase, special);
  } else if (uppercasepassword && numberspassword && specialpassword) {
    choices = uppercase.concat(num, special);
  }
  //else if statement for option of user picking true for one option
  else if (uppercasepassword) {
    choices = uppercase;
  } else if (lowercasepassword) {
    choices = lowercase;
  } else if (numberspassword) {
    choices = num;
  } else if (specialpassword) {
    choices = special;
  }

  //loop statement to randomly pick between the choices options//

  //made my random value gotten to be a string

  var pickedchoices = "";
  for (var i = 0; i < passwordlength; i++) {
    pickedchoices += choices[Math.floor(Math.random() * choices.length)];
  }
  document.getElementById("password").placeholder = pickedchoices;
  //alert (pickedchoices);
}

//document.getElementById("password"). placeholder = pickedchoices;
//mkae sure to close for loop and indicate all choices random values are to be in a string
