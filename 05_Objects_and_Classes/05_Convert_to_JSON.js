function Convert_to_JSON(name,lastName,hairColor) {
let json = {
    "name" : name,
    "lastName":lastName,
    "hairColor":hairColor
};
let text = JSON.stringify(json);
return text;
}
console.log(Convert_to_JSON("George", "Jones", "Brown"));