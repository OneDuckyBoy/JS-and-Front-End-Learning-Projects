function Towns(arr){
arr.forEach(townInfo => {
    townInfo =townInfo.split(' | ');
    let Name = townInfo[0];
    let Latitude = townInfo[1];
    let Longitude = townInfo[2];
    let info = {Name: Name, Latitude: Latitude, Longitude: Longitude}
    console.log(info);
});
}
console.log(Towns(
    ['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
));