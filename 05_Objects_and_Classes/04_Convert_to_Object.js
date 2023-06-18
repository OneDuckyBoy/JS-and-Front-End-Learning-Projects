function Convert_to_Object(str){
    
    return Object.entries(JSON.parse(str)).forEach(([key, value]) => console.log(`${key}: ${value}`));
}
console.log(Convert_to_Object('{"name": "George", "age": 40, "town": "Sofia"}'));