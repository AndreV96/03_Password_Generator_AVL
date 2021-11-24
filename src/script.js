// Assignment Code
let charactersPool = []
let passwordLength = 0
let passwordUppercase = false
let passwordLowercase = false
let passwordNumbers = false
let specialCharacters = false

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/

console.log(format)
function generatePasswordClick() {
    passwordLengthPrompt()
}
function passwordLengthPrompt() {
    passwordLength = parseInt(window.prompt('How many characters (beetween 8 and 128) should be your password length?'), 10)
    if (Number.isInteger(passwordLength) === true && passwordLength > 7 && passwordLength < 129) {
        passwordUppercaseConfirm();
    } else {
        window.alert('Please choose a number value between 8 and 128');
        passwordLengthPrompt();
    }
}
function passwordUppercaseConfirm() {
    console.log(passwordLength)
    passwordUppercase = window.confirm('Do you want to use uppercase letters?')
    passwordLowercaseConfirm()
}
function passwordLowercaseConfirm() {
    console.log(passwordUppercase)
    passwordLowercase = window.confirm('Do you want to use lowercase letters?')
    passwordNumbersConfirm()
}
function passwordNumbersConfirm() {
    console.log(passwordLowercase)
    passwordNumbers = window.confirm('Do you want to use numbers?')
    specialCharactersConfirm()
}
function specialCharactersConfirm() {
    console.log(passwordNumbers)
    specialCharacters = window.confirm('Do you want to use special characters?')
    writePassword()
}


// Write password to the #password input
function writePassword() {
    console.log(specialCharacters)

    // var password = generatePassword();

    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePasswordClick);

