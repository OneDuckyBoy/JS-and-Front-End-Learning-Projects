// console.log("Hello world!");

// function cityTaxes(name,population,treasury){
function cityTaxes(name, population, treasury){
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury= this.treasury + this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population = this.population + Math.floor(this.population * percent/100);
        },
        applyRecession(percent) {
            this.treasury = this.treasury- Math.floor(this.treasury*percent/100);
        },
    };
    return city;
}

const city = 
  cityTaxes('Tortuga',
  7000,
  15000);
  
console.log(city);	
// {
//   name: 'Tortuga',
//   population: 7000,
//   treasury: 15000,
//   taxRate: 10,
//   collectTaxes: [Function: collectTaxes],
//   applyGrowth: [Function: applyGrowth],
//   applyRecession: [Function: applyRecession]
// }
