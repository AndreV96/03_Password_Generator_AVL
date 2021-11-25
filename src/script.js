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

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


function generatePasswordClick() {
    console.log(charactersPool)
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
    passwordUppercase = window.confirm('Do you want to use uppercase letters?')
    if (passwordUppercase === true) {
        charactersPool += uppercasePool
    }
    passwordLowercaseConfirm()
}
function passwordLowercaseConfirm() {
    passwordLowercase = window.confirm('Do you want to use lowercase letters?')
    if (passwordLowercase === true) {
        charactersPool += "," + lowercasePool
    }
    passwordNumbersConfirm()
}
function passwordNumbersConfirm() {
    passwordNumbers = window.confirm('Do you want to use numbers?')
    if (passwordNumbers === true) {
        charactersPool += "," + numbersPool
    }
    specialCharactersConfirm()
}
function specialCharactersConfirm() {
    specialCharacters = window.confirm('Do you want to use special characters?')
    if (specialCharacters === true) {
        charactersPool += "," + specialCharactersPool
    }
    if (passwordUppercase === false &&
        passwordLowercase === false &&
        passwordNumbers === false &&
        specialCharacters === false) {
            window.confirm('You need to select at leat one character type')
            return
        }
    writePassword()
}


// Write password to the #password input
function writePassword() {
    console.log('Im writing a new password')
    let password = ''
    let includesUppercase = false
    let includesLowercase = false
    let includesNumbers = false
    let includesSpecialCharacters = false
    if (charactersPool[0] === ",") charactersPool = charactersPool.slice(1, charactersPool.Length )
    charactersPoolArraySplit = charactersPool.split(",")
    console.log(charactersPoolArraySplit)
    for (i = 0; i < passwordLength; i++ ) {
        password += charactersPoolArraySplit[Math.floor(Math.random()*charactersPoolArraySplit.length)]
    }

    if (passwordUppercase === true) {
        for (i = 0; i < uppercasePool.length; i++) {
            includesUppercase = password.includes(uppercasePool[i]) 
            console.log(includesUppercase)  
            if (includesUppercase === true) {
                break;
            } 
        }
        if (includesUppercase === false) {
            charactersPool = charactersPoolArraySplit.join(",")
            writePassword()
            return
        }
    }    
    if (passwordLowercase === true) {
        for (i = 0; i < lowercasePool.length; i++) {
            includesLowercase = password.includes(lowercasePool[i]) 
            console.log(includesLowercase)  
            if (includesLowercase === true) {
                break;
            } 
        }
        if (includesLowercase === false) {
            charactersPool = charactersPoolArraySplit.join(",")
            writePassword()
            return
        }
    }
    if (passwordNumbers === true) {
        for (i = 0; i < numbersPool.length; i++) {
            includesNumbers = password.includes(numbersPool[i]) 
            console.log(includesNumbers)  
            if (includesNumbers === true) {
                break;
            } 
        }
        if (includesNumbers === false) {
            charactersPool = charactersPoolArraySplit.join(",")
            writePassword()
            return
        }
    }
    if (specialCharacters === true) {
        for (i = 0; i < specialCharactersPool.length; i++) {
            includesSpecialCharacters = password.includes(specialCharactersPool[i]) 
            console.log(includesSpecialCharacters)  
            if (includesSpecialCharacters === true) {
                break;
            } 
        }
        if (includesSpecialCharacters === false) {
            charactersPool = charactersPoolArraySplit.join(",")
            writePassword()
            return
        }
    }

    console.log(password)
    passwordText.innerHTML = password

    charactersPool = []
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePasswordClick);

