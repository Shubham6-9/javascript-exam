// // Combining `map` and `filter`: Write a function that takes an array of numbers and returns a new array of squares of even numbers using `filter` and `map`.
// function q1(arr){
//     let arr2 = (arr.filter((e) => e%2==0)).map((e) => e*e)
//     console.log(arr2)
// }
// q1([1, 2, 3, 4, 5, 6])

// // Using `forEach` to Count Occurrences: Write a function that counts how many times each element appears in an array using `forEach`.
// function q2(arr){
//     let arr2 = []
//     arr.forEach((e) => {
//         let count=0;
//         if(arr2.includes(e)){

//         }else{
//             arr2.push(e)
//             for(let i=0 ; i<arr.length ; i++){
//                 if(arr[i]==e)
//                     count ++;
//             }
//             console.log(e +" is "+ count +" times")
//         }
//     })
// }
// q2(['apple', 'banana', 'orange', 'apple', 'banana', 'apple'])

// // Chain `map`, `filter`, and `forEach`: Write a function that filters out numbers less than `5` from an array, doubles the remaining numbers, and logs each doubled value using `forEach`.
// function q3(arr){
//     ((arr.filter((e) => e>=5)).map((e) => e*2)).forEach((e) => console.log(e));
// }
// q3([2, 3, 5, 7, 8])

// Using `map` to Modify Objects: Write a function that adds a new property `totalPrice` to an array of objects representing items in a shopping cart. Use `map` to calculate `totalPrice` as `price * quantity`.
// function q4(arr){
//     console.log(arr.map((el) => {
//         return {...el, total: el.price*el.quantity}
//     }))
// }
// q4([{item:'apple', price:2, quantity:3},
//     {item:'banana', price:1, quantity:5},
//     {item:'orange', price:3, quantity:2}
// ])

// Using `filter` for Complex Conditions: Write a function that filters out objects from an array where the `quantity` is less than `3` or the `price` is greater than `5`.
function q5(arr){
    console.log(arr.filter((e) =>{
        if(e.quantity>3 || e.price<5)
            return e
    }))
}
q5([{item:'apple', price:4, quantity:5},
    {item:'banana', price:6, quantity:2},
    {item:'orange', price:5, quantity:4}
])