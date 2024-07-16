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




// ------------ Functions --------------