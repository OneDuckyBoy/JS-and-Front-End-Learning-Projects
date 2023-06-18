function Orders(item, times){
/*
•	coffee - 1.50
•	water - 1.00
•	coke - 1.40
•	snacks - 2.00
*/
let price;
switch(item){
    case 'coffee':price = 1.50;break;
    case 'water':price = 1.00;break;
    case 'coke':price = 1.40;break;
    case'snacks':price = 2.00;break;
}
let total = price * times;
return total.toFixed(2);
}