// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// write a declare for each 
var number ='0,1,2,3,4,5,6,7,8,9';
var upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase ='a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
var symbols  = '!@,#$%&*{}[]/\\+='; 
var special;

// Add event listener to generate button
generateBtn.addEventListener( "click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Start function to generate password
function generatePassword() {
  //Random selection for all variables
  var password="";

  // Asking for user input of the length of password
   var length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 126"));
  
  // if user enter nothing or 0 then the prompt will return, same is they enter less than eight
  if(!length) {
    alert("Needs a value!");
    //return to asking "how many characters would you like for your password?"
    return generatePassword();
    // if user enter less than 8 or greater then 126 then they will be prompt with a alert
  } 
  if (length < 8 ||length > 126) {
    // Start user input prompts
    var length= alert("You must choose between 8 and 126 ");
    // return to Asking the user input "How many characters would you like for your password?"
    return generatePassword();
  }
  
    // if a user enter a number 8-126 then we can generate password and proceed with prompts.
    var randomLowercase = confirm ("Will this contain random lowercase letters?");
    var randomNumber = confirm ("Will this contain random numbers?");
    var randomSymbols = confirm ("Will this contain random symbols?");
    var randomUpperCase = confirm ("Will this contain random uppercase letters?");


  // if the user doesn't select none of these options then they will get alert 
  if (!randomNumber && !randomLowercase && !randomSymbols && !randomUpperCase){
    special= window.alert("You must choose a option to generate password.");
    return generatePassword();
  }

  // If user select all of the choices
   if (randomNumber && randomLowercase && randomSymbols && randomUpperCase){
   special = number.concat (lowerCase, upperCase,symbols);
  }
   // if user select 3 of the options
   else if (randomNumber && randomLowercase && randomSymbols){
    special = number.concat (lowerCase,symbols);
   }
   else if (randomNumber && randomUpperCase && randomSymbols){
    special = number.concat (upperCase, symbols);
   }
   else if (randomLowercase && randomUpperCase && randomSymbols){
    special = lowerCase.concat (upperCase, symbols);
   }
   else if (randomNumber && randomUpperCase && randomLowercase){
    special = number.concat (upperCase,lowerCase);
   }
 
   // if user select 2 options
   else if (randomNumber && randomLowercase){
    special = number.concat (lowerCase);
   }
   else if (randomNumber && randomUpperCase){
    special = number.concat (upperCase);
   }
   else if (randomNumber && randomSymbols){
  special = number.concat (symbols);
   }
   else if (randomLowercase && randomUpperCase){
    special = lowerCase.concat (upperCase);
   }
   else if (randomSymbols && randomLowercase){
    special = symbols.concat(lowerCase);
   }
   else if (randomSymbols && randomUpperCase){
    special = symbols.concat(upperCase);
   }

  // if user select only one option
   else if (randomNumber){
    special = number;
  }
   else if (randomSymbols){
    special = symbols;
  }
   else if(randomUpperCase){
    special = upperCase;
  }
   else if (randomLowercase){
    special = lowerCase;
  }
 
  for (var i = 0; i < length; i++){
   password += special[Math.floor(Math.random() * special.length)];
  }
    
  return password;
  }
  

