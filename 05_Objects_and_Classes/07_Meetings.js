function Meetings(arr){
    let scedule = {};
for (let pair of arr) {
    pair = pair.split(' ');
    let day = pair[0];
    let name = pair[1];
    if (!scedule[day]){
        scedule[day] = [name];
        console.log(`Scheduled for ${day}`);
    }else{
        console.log(`Conflict on ${day}!`);
    }
}
for (let day in scedule){
    console.log(`${day} -> ${scedule[day]}`);
    }
}
Meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);