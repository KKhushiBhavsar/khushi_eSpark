//Exercise-1
//with promise
const promiseFunction = async()=>{
   await new Promise((resolve)=>setTimeout((resolve)=>{
    console.log("hello vue")
    },1000));
}
promiseFunction();
//with async await
const asyncFunction = async ()=>{    
         setTimeout(()=>{
            if(Math.random() > 0.5){
                console.log("success!")
            }else{
                console.log("error")
            }
        })    
};
asyncFunction()


//Exercise 2:
const runApi ={
    get: async(api)=>{
        try{
            // console.log(api)
            const fetchApi = await fetch(api,{
                method: "GET",
            });
            console.log(fetchApi.status)
            if(fetchApi.status >=200 && fetchApi.status<=300){
                resData = await fetchApi.json();
                console.log(resData);
            }else{
                throw new Error("Failed connection");
            }
        }catch(error){
           console.log(error);
        }   
    },
    post: async(api,data,token)=>{
        try{
            const fetchApi = await fetch(api,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type':'application/json',
                'Authorization': token,
                }
            })
            if(fetchApi.status >=200 && fetchApi.status<=300){
                resData = await fetchApi.json();
                console.log(resData);
            }else{
                throw new Error("Failed connection");
            }
        }catch(error){
            console.log(error)
        }
    }
}
runApi.get(`https://jsonplaceholder.typicode.com/todos/2`);

//Exersice 3:
const multipleFetch = async()=>{
   const page = [1,2,3,4,5,6,7];
    const response = await Promise.all(
        page.map(async(page)=>{
            // console.log(page)
            const fetchData = await fetch(`https://jsonplaceholder.typicode.com/todos/${page}`);
            const jsonData = await fetchData.json();
            console.log(jsonData)
        })
    )
}
multipleFetch();

//Excersice 4:
const fetchData = {activityId: "64325f409942ad7ccff8484d",
                    activity: {
                        attachedRoles: ['user','admin'],
                        activityVisibility: {},
                        audience: "user",
                        category: "5c67e5a1c7cc90124ccfaf4b",
                        created_at: new Date().toISOString(),
                        editorial: true,
                        free: true,
                        groupSortPriority: 1,
                        languageCode: ['he', 'en'],
                        level: null,
                        mediaType: "Photo",
                        name: {en: "test"},
                        printable: true
                    }
            }
const Token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhIjoiVTJGc2RHVmtYMTlMTGNQQXBMVDB6VWp1bkVlZFVkOURocUdYblBuaVo3YnUwZENLSDlKdEdMV3RMTXJ2VHVsNHhOTkE3MmlGZFRuaE0yWUVmMnNlMTJWZEJjK2FMcFk4WkZWZ0pvZ3JsZkY0QnN1VmFDSW1hQ29icU9iNG9nQXRReVUrclJ5Uk9iaHlIVktIY3VWbVZxYUd2MXRGMUYxR1diQmVmdmdHQWN3SjVvYXhzNG5DclhZUWNIZjFRSXU0aXBjaWpBeHBYR0RvSlVKczNNdHFqc1BqSUZKQnVTNnVsWHptb2I4bTdrLzVhSFgvby9OUVFBNmZaVjJWeGFwQiIsImlhdCI6MTY4MjY3Mzk0MCwiZXhwIjoxNjgyNjc1MTQwfQ.UWC7sFKihQkaTG9z8g6KKKtpo3e3IC7RZLqSzIHwWck";

runApi.post(`https://admin-ci.cognishine.com/api/v1/activity-backup`,fetchData,Token)
