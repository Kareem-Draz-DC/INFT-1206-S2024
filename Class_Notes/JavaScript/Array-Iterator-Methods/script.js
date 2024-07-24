// console.log("script is running...")

// const arr = [10,12,35,24,65]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// function logNumber(num) {
//     console.log(num)
// }

// arr.forEach(element => {
    // console.log(element)
    // console.log(indexOfElement)
    // console.log(array)
// })

const foods = [
    {name: 'Apple', type: 'fruit', calories: 95},
    {name: 'Banana', type: 'fruit', calories: 105},
    {name: 'Broccoli', type: 'vegetable', calories: 55},
    {name: 'Carrot', type: 'vegetable', calories: 25},
    {name: 'Alligator Pear', type: 'fruit', calories: 250},
    {name: 'Chicken', type: 'poultry', calories: 350}
]

// forEach
// foods.forEach((foodItem, index) => {
//     foodItem.calories += 800
//     console.log(foodItem.calories)
// })

// map
// const foodTypes = foods.map((foodItem, index) => {
//     return foodItem.calories + 800;
// })
// console.log(foods)
// console.log(foodTypes)

// const foodsUnder100Calories = foods.filter(foodItem => foodItem.calories < 100)

// console.log(foodsUnder100Calories)

// find
// const chicken = foods.find(foodItem => {
//     // return foodItem.name == 'Chicken'
//     return foodItem.type == 'vegetable'
// })
// console.log(chicken)

// const veggieIndex = foods.findIndex(foodItem => {
//     // return foodItem.name == 'Chicken'
//     return foodItem.type == 'vegetable'
// })
// console.log(veggieIndex)


// let sumOfCalories = foods.reduce((acc, foodItem)=>{
//     return acc + foodItem.calories
// }, 0)

// console.log(sumOfCalories)


// Array Iterator Method Exercises

// 1. Get an array of food types using map()

// 2. Filter foods with calories greater than 100

// 3. Find the first fruit in the array

// 4. Check if there is any food with the name 'Apple'

// 5. Check if all foods have calories less than 700

// 6. Calculate the average calories of all foods using reduce()

// 7. Sort foods alphabetically by name using sort()

// 8. Create an array of food names with their types as a string, ex. ["Apple is a Fruit", "Banana is a Fruit", etc...]

// 9. Filter foods that are fruits

// 10. Find the index of 'Alligator Pears'




