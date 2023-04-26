var inputArray = [1,0,1,0,1,0,1,0,'a',1,0,'a',0];
// console.log(inputArray)
for(let i=0;i<inputArray.length;i++){
    // console.log(i)
    if(inputArray[i] === 0){
        inputArray.splice(i,1);
        inputArray.push(0)
    }
}
console.log(inputArray)