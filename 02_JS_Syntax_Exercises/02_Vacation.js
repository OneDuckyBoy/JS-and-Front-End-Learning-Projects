function solve(numOfPeople,typeOfPeople,day){

    let result = 0;
    let singlePersonPrice = 0;
    switch(typeOfPeople){
        case "Students":
            switch(day) {
                case "Friday":
                    singlePersonPrice = 8.45;
                    break;
                case "Saturday":
                    singlePersonPrice = 9.80;
                    break;
                case "Sunday":
                    singlePersonPrice = 10.46;
                    break;
            }
            break;
        case "Business":
            switch(day) {
                case "Friday":
                    singlePersonPrice = 10.90;
                    break;
                case "Saturday":
                    singlePersonPrice = 15.60;
                    break;
                case "Sunday":
                    singlePersonPrice = 16;
                    break;
            }
            break;
        case "Regular":
            switch(day) {
                case "Friday":
                    singlePersonPrice = 15;
                    break;
                case "Saturday":
                    singlePersonPrice = 20;
                    break;
                case "Sunday":
                    singlePersonPrice = 22.50;
                    break;
            }
            break;
    }
    result = numOfPeople * singlePersonPrice;
    if(typeOfPeople==="Students"&&numOfPeople>=30){
        result = result*0.85;
    }else if(typeOfPeople==="Business"&&numOfPeople>=100){
        result = result- 10 * singlePersonPrice;
    }else if(typeOfPeople==="Regular"&&numOfPeople>=10&&numOfPeople<=20){
        result = result*0.95;
    }
    return `Total price: ${result.toFixed(2)}`;
}
console.log(solve(40,
    "Regular",
    "Saturday"	
    )
    )