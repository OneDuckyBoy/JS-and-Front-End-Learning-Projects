function City(obj){
    Object.entries(obj).forEach(([key, value]) => console.log(`${key} -> ${value}`))
}
City(  {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}	
)