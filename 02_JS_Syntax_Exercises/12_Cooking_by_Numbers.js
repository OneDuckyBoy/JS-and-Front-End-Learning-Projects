function CookingByNumbers(num,...operations){
    num = Number(num)
    for(let operation of operations){

        if(operation === 'chop'){
            num = num/2
        }else if(operation === 'dice'){
            num = Math.sqrt(num)
        }else if(operation === 'spice'){
            num+=1
        }else if(operation === 'bake'){
            num = num*3
        }else if(operation === 'fillet'){
            num = (num*0.8).toFixed(2)
        }
        console.log(num);
    }
}
CookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
