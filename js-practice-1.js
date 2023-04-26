const inputArray = [1,2,3,2,3,4,2,2,2,4,5,5];
console.log("Length:   ",inputArray.length);

let finalArray = []
inputArray.forEach((a)=>{
    if(!finalArray.includes(a)){
        finalArray.push(a);
    }
})
console.log("origin array :   ",inputArray);
console.log("final array:   ",finalArray);
// console.log(finalArray)
