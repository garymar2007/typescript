// rest parameter (...)
var product = function(...nums) {
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }

    return result;
}

console.log(product(2, 3, 4, 5, 6,7, 8, 9, 10));

//Using a Data Type with the Rest Parameter
var product2 = function(x: number, y:number, ...nums: number[]){
    var result = x * y;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }

    return result;
}

console.log(product(2, 3, 4, 5, 6,7, 8, 9, 10));