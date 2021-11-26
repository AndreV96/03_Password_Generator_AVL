// Assignment Code
let charactersPool = []
let uppercasePool = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowercasePool = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbersPool = ["0","1","2","3","4","5","6","7","8","9"]
let specialCharactersPool = ["¡","!","@","#","$","%","^","&","*","(",")","_","+","-","=","\"","[","\\","]","{","}",";","'",":","|",",",".","<",">","/","¿","?"]

let passwordLength = 0
let passwordUppercase = false
let passwordLowercase = false
let passwordNumbers = false
let specialCharacters = false
let selectAtLeastOnePool = false  

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var yourPasswordIs = document.querySelector('#yourPasswordIs')


function generatePasswordClick() {
    passwordLengthPrompt();
    passwordUppercaseConfirm();
    passwordLowercaseConfirm();
    passwordNumbersConfirm();
    specialCharactersConfirm(); 
    atLeastOnePoolSelectedValidation();
    console.log(selectAtLeastOnePool)
    if (selectAtLeastOnePool === true) {writePassword()}

        
}
function passwordLengthPrompt() {
    passwordLength = parseInt(window.prompt('How long (between 8 and 128 characters) should be your password?'), 10)
    if (Number.isInteger(passwordLength) === false || passwordLength < 8 || passwordLength > 128) {
        window.alert('Please choose a number between 8 and 128');
        passwordLengthPrompt();
        return
    }
}
function passwordUppercaseConfirm() {
    passwordUppercase = window.confirm('Do you want to use uppercase letters?')
    if (passwordUppercase === true) {
        charactersPool.push(...uppercasePool)
    }
}
function passwordLowercaseConfirm() {
    passwordLowercase = window.confirm('Do you want to use lowercase letters?')
    if (passwordLowercase === true) {
        charactersPool.push(...lowercasePool)
    }
}
function passwordNumbersConfirm() {
    passwordNumbers = window.confirm('Do you want to use numbers?')
    if (passwordNumbers === true) {
        charactersPool.push(...numbersPool)
    }
}
function specialCharactersConfirm() {
    specialCharacters = window.confirm('Do you want to use special characters?')
    if (specialCharacters === true) {
        charactersPool.push(...specialCharactersPool)
    }
}
function atLeastOnePoolSelectedValidation() {
    if (passwordUppercase === false &&
        passwordLowercase === false &&
        passwordNumbers === false &&
        specialCharacters === false) {
            window.confirm('You need to select at least one character type') 
    } else {
        selectAtLeastOnePool = true
        console.log('si eligio una')
    } 
}

// Write password to the #password input
function writePassword() {
    let password = ''
    console.log(charactersPool)
    let includesUppercase = false
    let includesLowercase = false
    let includesNumbers = false
    let includesSpecialCharacters = false
    selectAtLeastOnePool = false 
    
    for (i = 0; i < passwordLength; i++ ) {
        password += charactersPool[Math.floor(Math.random()*charactersPool.length)]
    }

    if (passwordUppercase === true) {
        for (i = 0; i < uppercasePool.length; i++) {
            includesUppercase = password.includes(uppercasePool[i]) 
            if (includesUppercase === true) {
                break;
            } 
        }
        if (includesUppercase === false) {
            writePassword()
            return
        }
    }    
    if (passwordLowercase === true) {
        for (i = 0; i < lowercasePool.length; i++) {
            includesLowercase = password.includes(lowercasePool[i])  
            if (includesLowercase === true) {
                break;
            } 
        }
        if (includesLowercase === false) {
            writePassword()
            return
        }
    }
    if (passwordNumbers === true) {
        for (i = 0; i < numbersPool.length; i++) {
            includesNumbers = password.includes(numbersPool[i]) 
            if (includesNumbers === true) {
                break;
            } 
        }
        if (includesNumbers === false) {
            writePassword()
            return
        }
    }
    if (specialCharacters === true) {
        for (i = 0; i < specialCharactersPool.length; i++) {
            includesSpecialCharacters = password.includes(specialCharactersPool[i])  
            if (includesSpecialCharacters === true) {
                break;
            } 
        }
        if (includesSpecialCharacters === false) {
            writePassword()
            return
        }
    }
    console.log(password)
    console.log(password.length)
    yourPasswordIs.innerHTML = "Your new password is:"
    yourPasswordIs.classList.add("red-color")
    passwordText.innerHTML = password

    charactersPool = []
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePasswordClick);

