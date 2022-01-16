// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write a declare for each 
var randomNumber =['1','2','3','4','5','6','7','8','9'];
var randomUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var randomLowercase = ['a','b',' c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomSymbols = ['!',' #',' $','%','@','^','&','*','(','{','}','[','}','?','<','>','.',',','/',':',';',')','=','+','-','-','~','`']; 
var click =[];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function to generate password
function generatePassword() {
  //Random selection for all variables
  var result ="";
  // Asking for user input of the length of password
   var length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 126"));
  
  // if user enter nothing or 0 then the prompt will return, same is they enter less than eight
  if(!length) {
    alert("Needs a value!");
    //return to asking "how many characters would you like for your password?"
    return generatePassword();
    // if user enter less than 8 or greater then 126 then they will be prompt with a alert
  } else if (length < 8 ||length > 126) {
    // Start user input prompts
    var length= alert("You must choose between 8 and 126 ");
    // return to Asking the user input "How many characters would you like for your password?"
    return generatePassword();
  }
  else{
    // if a user enter a number 8-126 then we can generate password and proceed with prompts.
    var randomLowercase = confirm ("Will this contain random lowercase letters?");
    var randomNumber = confirm ("Will this contain random numbers?");
    var randomSymbols = confirm ("Will this contain random symbols?");
    var randomUpperCase = confirm ("Will this contain random uppercase letters?");
  };

  // if the user doesn't select none of these options then they will get alert 
  if (!randomNumber && !randomLowercase && !randomSymbols && !randomUpperCase){
    click= windows.alert("You must choose a option to generate password.");
    return generatePassword();
  }

  // If user select all of the choices
  else if (randomNumber && randomLowercase && randomSymbols && randomUpperCase){
    click = randomNumber.concat(randomLowercase, randomUpperCase,randomSymbols);
  }
  // if user select 3 of the options
  else if (randomNumber && randomLowercase && randomSymbols){
    click = randomNumber.concat(randomLowercase,randomSymbols);
  }
  else if (randomNumber && randomUpperCase && randomSymbols){
    click = randomNumber.concat(randomUpperCase, randomSymbols);
  }
  else if (randomLowercase && randomUpperCase && randomSymbols){
    click = randomLowercase.concat(randomUpperCase, randomSymbols);
  }
  else if (randomNumber && randomUpperCase && randomLowercase){
    click = randomNumber.concat(randomUpperCase, randomLowercase);
  }

  // if user select 2 options
  else if (randomNumber && randomLowercase){
    click= randomNumber.concat(randomLowercase);
  }
  else if (randomNumber && randomUpperCase){
    click = randomNumber.concat(randomUpperCase);
  }
  else if (randomNumber && randomSymbols){
  click = randomNumber.concat(randomSymbols);
  }
  else if (randomLowercase && randomUpperCase){
    click = randomLowercase.concat(randomUpperCase);
  }
  else if (randomSymbols && randomLowercase){
    click = randomSymbols.concat(randomLowercase);
  }
  else if (randomSymbols && randomUpperCase){
    click = randomSymbols.concat(randomUpperCase);
  }

  // if user select only one option
  else if (randomNumber){
    click.concat(randomNumber);
  }
  else if (randomSymbols){
    click.concat(randomSymbols);
  }
  else if (randomUpperCase){
    click.concat(randomUpperCase);
  }
  else if (randomLowercase){
    click.concat(randomLowercase);
  };
 

  for (var i = 0; i < length; i++){
    result = click.charAt(Math.floor(Math.random() * click.length));
  }
    
  function characterType()
}
