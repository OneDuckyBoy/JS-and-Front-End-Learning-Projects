function Fruits(fruit, weight, price){
    weight /=1000
    price = price*weight
    return `I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
}
console.log(Fruits('orange', 2500, 1.80))