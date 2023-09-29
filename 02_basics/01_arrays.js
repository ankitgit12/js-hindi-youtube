///arrays////


const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);


//array methods   

myArr.push(7)
myArr.pop()


myArr.shift()
myArr.unshift(9)

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));


const newArr = myArr2.join()
console.log(myArr);

console.log(typeof newArr);

//slice
///SPLICE 



console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);
console.log(myn2);


////0_2 arrays ////.>


const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][1]);


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);