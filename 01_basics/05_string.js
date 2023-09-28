    const name = "ankit"
    const repoCount = 50
   // console.log(name + repoCount + "value");
   // console.log(`hello my name is ${ankit} and my repo count is ${repoCount}`);
const gameName = String ('ankitaa')


console.log(gameName[0]);
console.log(gameName._proto_);



console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt());
console.log(gameName.indexOf());


const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString =gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ankit   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://anlit.com/ankit%20singh"
console.log(url.replace('%20', '-'));

console.log(url.includes('ankit'));


console.log(gameName.split('-'));




