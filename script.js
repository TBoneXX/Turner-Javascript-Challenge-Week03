// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign variables to four arrays for each type of character in password

var NumericCharacters = [
'0',
'1',
'2',
'3',
'4',
'5',
'6',
'7',
'8',
'9',

]

var specialCharacters = [
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
  '.',
];
var lowerCasedCharacters = [
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
  'z',
];

var upperCasedCharacters = [
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
  'Z',
];



function getPasswordOptions () {
  var length = parseInt(
    prompt('Please select password length: 8 to 128 characters')
  );

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
}
if (length < 8) {
  alert('Password length must be at least 8 characters');
  return null;

}
if (length > 128) {
  alert('Password length cannot exceed 128 characters');
  return null;

}
var hasNumericCharacters = confirm(
  'Click OK to confirm including Numeric characters. (1,2,3,etc.)'
);

var hasSpecialCharacters = confirm(
  'Click OK to confirm including special characters. (@,$,%,etc.)'
);

var hasLowerCasedCharacters = confirm(
  'Click OK to confirm including lower cased letters.'
);

var hasUpperCasedCharacters = confirm(
  'Click OK to confirm including UPPER cased letters.'
);


var passwordOptions = {
  length: length,
  hasNumericCharacters: hasNumericCharacters,
  hasSpecialCharacters: hasSpecialCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters,
  
};

return passwordOptions;
}
function generatePassword (){
  var options = getPasswordOptions();

//  First for loop in if statement is for all types of characters included 

if (options.hasNumericCharacters==true&&options.hasSpecialCharacters==true&&options.hasLowerCasedCharacters==true&&options.hasUpperCasedCharacters==true){ 
    var arrayAll = NumericCharacters.concat(specialCharacters, lowerCasedCharacters, upperCasedCharacters);

// We create a new array, ArrayAll, by concatinating each array of characters, based on user choices. 

console.log (options.hasNumericCharacters) ;

// Here we create a new array named pwdtext to push the results of the random character generation to, in order to capture each character chosen

      var pwdtext = [];
      for (let i = 0; i < options.length; i++) {
      var pwd = arrayAll[Math.floor(Math.random() * arrayAll.length)];
      
      pwdtext.push(pwd);
      
    console.log(pwdtext);
    }
    // The next line takes the pwdtext array and joins it in a new variable, psswrd, to allow us to output the password without commas or other punctuation.
  var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;
}

// Second loop, else if statement Numeric characters excluded 

else if (options.hasNumericCharacters==false&&options.hasSpecialCharacters==true&&options.hasLowerCasedCharacters==true&&options.hasUpperCasedCharacters==true){
  var array2 = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array2[Math.floor(Math.random() * array2.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;
}

// Third loop, else if statement Numeric and Special characters excluded 

else if (options.hasNumericCharacters==false&&options.hasSpecialCharacters==false&&options.hasLowerCasedCharacters==true&&options.hasUpperCasedCharacters==true){
  var array3 = lowerCasedCharacters.concat(upperCasedCharacters);
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array3[Math.floor(Math.random() * array3.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;
}

// Fourth loop, only lower case characters included 

else if (options.hasNumericCharacters==false&&options.hasSpecialCharacters==false&&options.hasLowerCasedCharacters==true&&options.hasUpperCasedCharacters==false){
  var array4 = lowerCasedCharacters;
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array4[Math.floor(Math.random() * array4.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;

}
// Fifth loop, only Upper case characters included 

else if (options.hasNumericCharacters==false&&options.hasSpecialCharacters==false&&options.hasLowerCasedCharacters==false&&options.hasUpperCasedCharacters==true){
  var array5 = upperCasedCharacters;
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array5[Math.floor(Math.random() * array5.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;
}

// Sixth loop, only Numeric characters included 

else if (options.hasNumericCharacters==true&&options.hasSpecialCharacters==false&&options.hasLowerCasedCharacters==false&&options.hasUpperCasedCharacters==false){
  var array6 = NumericCharacters;
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array6[Math.floor(Math.random() * array6.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;
}

// Seventh loop, only Special characters included 

else if (options.hasNumericCharacters==false&&options.hasSpecialCharacters==true&&options.hasLowerCasedCharacters==false&&options.hasUpperCasedCharacters==false){
  var array7 = specialCharacters;
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array7[Math.floor(Math.random() * array7.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;

}

// Eigth loop, only Numeric and Special characters included 

else if (options.hasNumericCharacters==true&&options.hasSpecialCharacters==true&&options.hasLowerCasedCharacters==false&&options.hasUpperCasedCharacters==false){
  var array8 = NumericCharacters.concat(specialCharacters);
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array8[Math.floor(Math.random() * array8.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;

}

// Ninth loop, only Numeric and lower cased characters included 

else if (options.hasNumericCharacters==true&&options.hasSpecialCharacters==false&&options.hasLowerCasedCharacters==true&&options.hasUpperCasedCharacters==false){
  var array9 = NumericCharacters.concat(lowerCasedCharacters);
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array9[Math.floor(Math.random() * array9.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;

}

// Tenth loop, Special Characters Excluded

else if (options.hasNumericCharacters==true&&options.hasSpecialCharacters==false&&options.hasLowerCasedCharacters==true&&options.hasUpperCasedCharacters==true){
  var array10 = NumericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array10[Math.floor(Math.random() * array10.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;

}

// Eleventh loop, Upper Cased Characters Excluded

else if (options.hasNumericCharacters==true&&options.hasSpecialCharacters==true&&options.hasLowerCasedCharacters==true&&options.hasUpperCasedCharacters==false){
  var array11 = NumericCharacters.concat(lowerCasedCharacters, specialCharacters);
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array11[Math.floor(Math.random() * array11.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;

}

// Twelfth loop, lower Cased Characters Excluded

else if (options.hasNumericCharacters==true&&options.hasSpecialCharacters==true&&options.hasLowerCasedCharacters==false&&options.hasUpperCasedCharacters==true){
  var array12 = NumericCharacters.concat(upperCasedCharacters, specialCharacters);
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array12[Math.floor(Math.random() * array12.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;

}

// Thirteenth loop, only Numeric and Upper cased characters included 

else if (options.hasNumericCharacters==true&&options.hasSpecialCharacters==false&&options.hasLowerCasedCharacters==false&&options.hasUpperCasedCharacters==true){
  var array13 = NumericCharacters.concat(upperCasedCharacters);
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array13[Math.floor(Math.random() * array13.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;

}



// Fourtteenth loop, only Special and lower cased characters included 

else if (options.hasNumericCharacters==false&&options.hasSpecialCharacters==true&&options.hasLowerCasedCharacters==true&&options.hasUpperCasedCharacters==false){
  var array14 = specialCharacters.concat(lowerCasedCharacters);
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array14[Math.floor(Math.random() * array14.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;

}

// Fifteenth loop, only Special and Upper cased characters included 

else if (options.hasNumericCharacters==false&&options.hasSpecialCharacters==true&&options.hasLowerCasedCharacters==false&&options.hasUpperCasedCharacters==true){
  var array15 = specialCharacters.concat(upperCasedCharacters);
  var pwdtext = [];
  for (let i = 0; i < options.length; i++) {
  var pwd = array15[Math.floor(Math.random() * array15.length)];
  
  pwdtext.push(pwd);
  
console.log(pwdtext);
}
var psswrd = pwdtext.join("");
console.log(psswrd);
return psswrd;

}

// Error message if no characters selected

else if (options.hasNumericCharacters==false&&options.hasSpecialCharacters==false&&options.hasLowerCasedCharacters==false&&options.hasUpperCasedCharacters==false){
return "Error - No Character Types Selected";

}
}
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
