//Exercise-1
//with promise
const function1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random() > 0.5){
            resolve("resolved!")
        }else{
            reject("reject")
        }
    },1000)
    
});
function1.then(resolve=> console.log(resolve))
.catch(error=> console.log(error));

//with async await
const function2 = async ()=>{    
         setTimeout(()=>{
            if(Math.random() > 0.5){
                console.log("success!")
            }else{
                console.log("error")
            }
        })    
};
function2()


//Exercise 2:
const runApi = async (api)=>{
    console.log(api)
    const fetchApi = await fetch(api);
    const flag =  checkApi(fetchApi);
    if(flag){
        console.log(fetchApi.status,"success")
    }else{
        console.log(fetchApi.status,"Failed!")
    }
}
const checkApi = (data)=>{
    if(data.status >=200 && data.status<=300){
    // if(data.status.toString().charAt(0) == 2 || data.status.toString().charAt(0) == 3){
        return true;
    }
    return false;
    console.log(data)
}
runApi(`https://jsonplaceholder.typicode.com/todos/1`);




//Exersice 3:
const multipleApi1 = async(i)=>{
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/todos/${i}`);
    const data = await fetchData.json();
    console.log(data)
}
const callingFunction1 = async() =>{
    let i=0;
    while(i < 7){
           multipleApi1(i);
           i++;
    }
}
// const callingFunction1 = async() =>{
//     let i = 0;
//    setInterval(()=>{
//        if(i < 7){
//            i++
//            multipleApi1(i)
//        }
//    },1000)
// }
callingFunction1()

//Excersice 4:

const fetchUrl = async()=>{
    try{
        const fetchData = await fetch(`https://admin-ci.cognishine.com/api/v1/activity-backup`,{
            method: "POST",
            body: JSON.stringify({
                activityId: "64325f409942ad7ccff8484d",
                activity: {
                    activityVisibility: {},
                    attachedRoles: [],
                    audience: "",
                    category: "5c67e5a1c7cc90124ccfaf4b",
                    created_at: "Wed Oct 05 2011 20:18:00 GMT+0530",
                    editorial: true,
                    free: true,
                    groupSortPriority: 1,
                    languageCode: ['he', 'en'],
                    level: null,
                    mediaType: "Photo",
                    name: {en: "test"},
                    printable: true,
                }
            }),
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhIjoiVTJGc2RHVmtYMTlMTGNQQXBMVDB6VWp1bkVlZFVkOURocUdYblBuaVo3YnUwZENLSDlKdEdMV3RMTXJ2VHVsNHhOTkE3MmlGZFRuaE0yWUVmMnNlMTJWZEJjK2FMcFk4WkZWZ0pvZ3JsZkY0QnN1VmFDSW1hQ29icU9iNG9nQXRReVUrclJ5Uk9iaHlIVktIY3VWbVZxYUd2MXRGMUYxR1diQmVmdmdHQWN3SjVvYXhzNG5DclhZUWNIZjFRSXU0aXBjaWpBeHBYR0RvSlVKczNNdHFqc1BqSUZKQnVTNnVsWHptb2I4bTdrLzVhSFgvby9OUVFBNmZaVjJWeGFwQiIsImlhdCI6MTY4MjY3Mzk0MCwiZXhwIjoxNjgyNjc1MTQwfQ.UWC7sFKihQkaTG9z8g6KKKtpo3e3IC7RZLqSzIHwWck'
            },
        });            
         console.log((fetchData))
         const data = await fetchData.json();
         console.log(data)
    }
    catch(error){
        console.log(error)
    }
    
}
fetchUrl();