let inputArray = ['a','b','c','a','u']
finalArray = inputArray.map((a)=>{
    return a.charCodeAt() - 97;
})
console.log(finalArray)

//for upper case and lower case letter...
// firstArray = ['A','B','c']
// uppercaseFinalArray = inputArray.map((a)=>{
//     // console.log(a.toLowerCase().charCodeAt()- 97) 
//     return a.toLowerCase().charCodeAt()- 97;
// })
// console.log(uppercaseFinalArray)