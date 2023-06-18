
function Songs(arr){
    class Song{
        constructor(typeList,name, time,){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
    }
    }
let n = arr[0];
let arrr = [];
for (let i = 1; i <= n; i++) {
    let ar = arr[i].split("_");
    let typeList = ar[0];
    let name = ar[1];
    let time = ar[2];
    let song = new Song(typeList,name, time);
    arrr.push(song);
}
let type = arr[arr.length - 1]
if  (type === "all"){
    for (let i = 0; i < arrr.length; i++) {
        console.log(arrr[i].name);
    }
}else{
    for (let i = 0; i < arrr.length; i++) {
        if (arrr[i].typeList === type){
            console.log(arrr[i].name);
        }
    }
}
}
Songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );
    /*
    DownTown
    Kiss
    Smooth Criminal
    */