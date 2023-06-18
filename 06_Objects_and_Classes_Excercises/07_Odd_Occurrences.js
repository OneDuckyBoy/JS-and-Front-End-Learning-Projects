function Odd_Occurrences(string){
    string = string.toLowerCase();
    let items = string.split(" ");
    let arr = {};

    for (const item of items) {
        const count = items.get(item) || 0;
        items.set(item, count + 1);
      }

    for (let i = 0; i < items.length; i++) {

    }
    // console.log("hii");
    // items.forEach(el => console.log(el))
    // console.log("hiii");
    let str = "";
    console.log("ww");
    Object.keys(arr).forEach(el => {
        // if(arr[el]%2==1){
        //     str+=el+" ";
        // }
        console.log(`${el} -> ${arr[el]}`);
    });
    console.log();
    // console.log(str);
    // console.log("hi");

}
// Odd_Occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
console.log(getOddFrequencyWords('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
function getOddFrequencyWords(sentence) {
    const wordFrequency = new Map();
    const words = sentence.toLowerCase().split(" ");
    for (const word of words) {
      const count = wordFrequency.get(word) || 0;
      wordFrequency.set(word, count + 1);
    }
    const oddFrequencyWords = [];
    for (const [word, count] of wordFrequency) {
      if (count % 2 !== 0) {
        oddFrequencyWords.push(word);
      }
    }
    let str ="";
    oddFrequencyWords.forEach(oddFrequency => {str +=oddFrequency.toString()+" "});
    return str;
  }