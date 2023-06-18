function Password_Validator(password){
    let result ="";
    let passwordLength = true
    let passwordOnlyLettersAndDigits = true
    let passwordContainsAtLeastTwoDigits = true
    if(!(password.length > 6&&password.length <10)){
        result += "Password must be between 6 and 10 characters\n";
        passwordLength = false;
    }
    if(!(/^[A-Za-z0-9]*$/.test(password))){
        result += "Password must consist only of letters and digits\n";
        passwordOnlyLettersAndDigits = false;
    }
    if(!(/^.*\d.*\d.*$/.test(password))){
        result += "Password must have at least 2 digits\n";
        passwordContainsAtLeastTwoDigits = false;
    }
    if(passwordLength && passwordOnlyLettersAndDigits && passwordContainsAtLeastTwoDigits){
        result = "Password is valid";
    }
    return result;
}
console.log(Password_Validator('passsss'));