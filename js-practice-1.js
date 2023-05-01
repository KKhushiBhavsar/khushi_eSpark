const lotteryWinner = new Promise((resolve,reject)=>{
    console.log("Lottery Draw is happening !!!")
    setTimeout(()=>{
    if(Math.random() >= 0.5){
        resolve("YOU WIN ;)")
    }else{
        reject(new Error("YOU LOSE :("));
    }    
    },1000)
    
})
lotteryWinner.then(resolve=>console.log(resolve)).catch(error=>console.log(error))


const wait = function(second){
    return new Promise(function(resolve){
        setTimeout(resolve,second * 1000);
    })
};
wait(2)
.then(()=>{
    console.log("i waited 2 second")
    wait(1)
}).then(()=>{
    console.log("1 second")
    wait(1)
}).then(()=>{
    console.log("2 second")
    wait(1)
}).then(()=>{
    console.log("3 second")
    wait(1)
}).then(()=>{
    console.log("4 second")
    wait(1)
}).then(()=>{
    console.log("5 second")
    wait(1)
}).then(()=>{
    console.log("6 second")
    wait(1)
});


Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').then(new Error('Problem!')).catch(x =>{
    console.error(x);
});