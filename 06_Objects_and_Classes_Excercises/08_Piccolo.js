function Piccolo(array){
    let cars = [];
    array.forEach(el => {
        let command = el.split(",")[0];
        let plate = el.split(",")[1];
        if (command === "IN"){
            cars.push(plate);
        }else if(command === "OUT"){
            cars.splice(cars.indexOf(plate),1)
        }
    });
    cars = cars.sort();
    if (cars.length==0) console.log("Parking Lot is Empty");  
    cars.forEach(car => {
        console.log(car);
    });

}
Piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)