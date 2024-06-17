/* let variable = "valami"
const constVariable = "konstans valami"


variable = "új valami"
 */

// primitivek
/* let variable1 = 10
let variable2 = "text"
let variable3 = true
let variable4 = undefined


// adatstruktúrák

let array = ["one", "two", "three"]
let obj = {
    key1: "key1"
    key2: 10
} */

// függvények

/* function myFunc() {
    console.log("hello world")
}


function greetings(name) {
    if (name === "Lajos") {
        console.log(`szia Lajos!`)
    } else {

    console.log(`hello ${name}!`)
    }
}
betterGreetings("Lajos")


function betterGreetings(name) {
    if (name === "Lajos") {
        console.log(`szia Lajos!`)
        return `szia Lajos!`
    } else {
        console.log(`hello ${name}!`)
        return `hello ${name}!`
    }
}
 */


/* const arrowFunc = (name) => {
    console.log(`Hello ${name}`)
}
arrowFunc("jani") */

const array = ["two", 13, false, null, NaN, ["elemetn", "element2"], {key: "value"}]
console.log(array[array.length - 1])


const obj = {
    key: "value",
    key2: 23,
    key3: true,
    key4: ["element1", "element2"],
    key5: { nestedKey: "valami"},
    "key-6": "key6 value"
}

console.log(obj.key5)
console.log(obj["key-6"])

