function Address_Book(arr){
    let book = {};
for (const pair1 of arr) {
     let pair = pair1.split(':');
    let name = pair[0];
    let address = pair[1];
    book[name] = address;
}
  // Sort
  keys = Object.keys(book);
  keys.sort();
  for(key of keys) {
    console.log(`${key} -> ${book[key]}`);
  }
}
Address_Book(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);