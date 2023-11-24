// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Make a function and if else for a user to choose the length of characters which has to be between 8 and 128


// Arrow Function to prompt users for the password length
 const getPasswordLength = () => {
  const userInput = prompt("Choose the amount of characters, you would like the password to contain (8-128)");
   if (userInput < 8 || userInput > 128) {
   alert("the password length is too short, choose between 8-128");
  return getPasswordLength();
 } else {
  return parseInt(userInput);
 }
 };

// create a function to prompt user to choose different characters types and use if else or switch case to help
// Arrow function for user to choose characters type

const characterTypes = () => {
  let choosenTypes = [];

  if (confirm('Include lowercase characters?')) {
   choosenTypes.push('lowercase');
  }
  
  if (confirm('Include uppercase characters?')) {
   choosenTypes.push('uppercase');
  }

  if (confirm('Add numbers?')) {
   choosenTypes.push('numbers');
  }

  if (confirm('add special characters?')) {
  choosenTypes.push('special numbers');
  }

  if (choosenTypes.length === 0) {
  alert('please choose minimum of one character type');
  return characterTypes();
  } else {
    return choosenTypes;
  }

};



// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');
//   passwordText.value = password;
//   getPasswordOptions();
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);

