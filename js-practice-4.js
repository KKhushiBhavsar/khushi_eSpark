var myObject = [{
    name: 'abc',
    age: 20
},
{
    name: 'xyz',
    age: 30
}]
// console.log(myObject.length)
myArray = []
myObject.forEach((a)=>{
    myArray.push(a.name)
    // console.log(a)
})
console.log(myArray)

//second method

let myOutput = myObject.map((a)=>{
    return a.name
})
console.log(myOutput)
