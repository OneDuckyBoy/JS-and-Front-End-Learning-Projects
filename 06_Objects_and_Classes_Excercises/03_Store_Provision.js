function Store_Provision(local, remote){
    let arr= {};
    for (let i = 0; i < local.length; i+=2) {
        let key = local[i];
        let value = parseInt(local[i+1]);
        arr[key] = value;
    }
    for (let i = 0; i < remote.length; i+=2) {
        let key = remote[i];
        let value = parseInt(remote[i+1]);
        if (local.includes(key)) {
        arr[key]=arr[key] + value;
        }else {
            arr[key] = value;
        }
    }

    Object.keys(arr).forEach(function(key) {
        console.log(`${key} -> ${arr[key]}`);
      });
}
Store_Provision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );