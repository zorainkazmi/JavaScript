const marvel_heros = ["thor", "iron-man", "spider-man"]
const dc_heros = ["super-man", "flash", "batman"]

marvel_heros.push(dc_heros);  // it basically add dc_heros value(["super-man", "flash", "batman"]) as fourth element in marvels_heros

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);     // return new array
// console.log(allHeros)

const all_new_heros = [...marvel_heros,  ...dc_heros]  // spread operator
// console.log(all_new_heros)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5, 6]]]
const flatting_array_into_one_Array =  another_array.flat(Infinity)  //flatting the array upto infinity depth
// console.log(flatting_array_into_one_Array)



console.log(Array.isArray("Zain"));
console.log(Array.from("Zain"));
console.log(Array.from({name: "Zain"}));   // interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))

