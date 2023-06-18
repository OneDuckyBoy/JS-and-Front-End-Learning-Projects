function Person_Info(firstName,lastName,age){
    age  = Number(age);
let person = {firstName: firstName, lastName: lastName,age:age};

return person;

}
console.log(Person_Info("Peter", 
"Pan",
"20"
));