function Cats(arr){
    class Cat{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (const cat of arr) {
        
    let name = cat.split(" ")[0];
    let age = cat.split(" ")[1];
    let catt = new Cat(name, age);
    catt.meow();
    }

}
Cats(['Mellow 2', 'Tom 5']);