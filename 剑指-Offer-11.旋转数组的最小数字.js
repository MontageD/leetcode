var minArray = function(numbers) {
    return numbers.sort((a,b)=>a-b)[0]
};

console.log(minArray([3,4,5,1,2]))
