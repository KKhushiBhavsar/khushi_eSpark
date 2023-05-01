let inputArray = [1,0,1,0,1];
// console.log(inputArray)
inputArray.forEach((val,index)=>{
    // console.log(val,index)
    if(val === 0){
        inputArray.splice(index,1);
        inputArray.push(val)
    }
})

console.log(inputArray)

