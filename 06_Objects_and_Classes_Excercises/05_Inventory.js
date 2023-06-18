function Inventory(array){
    let players = {};
array.forEach(el => {
    let data = el.split(' / ');
    let name = data[0];
    let level = parseInt(data[1]);
    let items = data[2];
    let output = `Hero: ${name}\nlevel => ${level}\nitems => ${items}`;
    players[level] ={name:name, level:level, items:items, output:output};
});
let result ="";
// Object.keys(players).sort().forEach(function(key){
//     result+= players[key].output+"\n";
// });
let SortedKeys= getSortedKeys(players);
SortedKeys.forEach(function(key){
    result+= players[key].output+"\n";
});
console.log(result);


function getSortedKeys(obj) {
    var keys = Object.keys(obj);
    return keys.sort(function(a,b){return obj[b]-obj[a]});
}
}
Inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    
    )