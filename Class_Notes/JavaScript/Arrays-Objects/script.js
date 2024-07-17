// console.log("Script is running...");

// -------------- Objects -----------------

let car = {
    type: "Supercar", // type => KEY, Supercar => VALUE
    brand: "Porsche",
    model: "Spyder",
    year: 2023,
    color: "yellow",
    subCar: {
        brand: "Rimac",
        color: "blue"
    },
    numArray: [1,2,3],
    startEngine: function() {
        console.log("Engine started");
    }
}

// car.brand = car // This is an example of a circular reference -> When an object references itself
// console.log(car)
// let key = "brand"
// console.log(car.brand) // Porsche
// console.log(car[key]) // Porsche
// console.log(car.subCar.brand) // Rimac
// console.log(car["subCar"]["brand"]) // Rimac

// console.log(Object.keys(car)); // ['type', 'brand', 'model', 'year', 'color', 'subCar']
// console.log(Object.values(car)); // ['Supercar', 'Porsche', 'Spyder', 2023, 'yellow', {…}]
// console.log(Object.entries(car)); // returns both keys and values


// ------------ Arrays --------------


let num = 5; // number

let classSubject = 'javascript'; // string

let isCodingFun = true // boolean

let mixDataArray = [5, 'javascript', true, {key1: "value1"}, [1,2,3], () => {}]

// console.log(mixDataArray.toString())

let numArray = [1,2,3]

numArray.push(5) // Append the number 5 to the end of the array

numArray.pop() // Will remove/delete the element at the end of the array

numArray.shift() // Will remove/delete the element at the beginning of the array

numArray.unshift(5) // Will append the number 5 to the beginning of the array

// console.log(numArray)
// console.log(numArray.toString()) // Will return a string of all the elements in the array
// console.log(numArray[1]) // Will return the element at index 1 in the array
// console.log(numArray.length) // Return the length of the array i.e. the number of elements in the array

let mixArray = numArray.concat(mixDataArray) // Will combine to arrays

// console.log(mixArray)

let deletedItems = mixArray.splice(4,1, "python")

// console.log("Deleted Items:", deletedItems)

console.log(mixArray)

console.log(mixArray[mixArray.length - 1])

console.log(mixArray.reverse())

let copyOfMixArray = [...mixArray] // ... Is called the spread operator

// The spread operator will copy the contents of an iterable object in javascript

console.log(copyOfMixArray)

// console.log(mixArray.join('--->'))
