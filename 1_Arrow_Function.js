// Function
function plusTwo(s) {
    return s + 2;
}
console.log(plusTwo(10)); // 12

// Arrow Function
arrowPlusTwo = s => {
    return s + 2;
};
console.log(arrowPlusTwo(10)); // 12

// One Line Arrow Function
oneLineArrowPlusTwo = s => s + 2;
console.log(oneLineArrowPlusTwo(10)); // 12

// Error Corrupt
// errorPlusTwo = s => return s + 2;
// consoloe.log(errorPlusTwo(10)) // Error

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map without arrow function
arr_map = arr.map(function(value) {
    return value * 2;
});
console.log(arr_map); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

// map with arrow function
arr_map = arr.map(v => v * 2);
console.log(arr_map); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

arr_map = arr.map(value => {
    return value * 2;
});
console.log(arr_map); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

// filter with arrow function
arr_filter = arr.filter(value => value < 5);
console.log(arr_filter); // [1, 2, 3, 4]

arr_filter = arr.filter(value => {
    return value < 5;
});
console.log(arr_filter); // [1, 2, 3, 4]
