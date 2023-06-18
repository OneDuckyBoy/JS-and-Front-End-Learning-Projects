function Emplyees(arr){
arr.forEach(employeeName => {
    let personalNum = employeeName.length;
    console.log( `Name: ${employeeName} -- Personal Number: ${personalNum}` );
});
}
console.log(Emplyees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    ));