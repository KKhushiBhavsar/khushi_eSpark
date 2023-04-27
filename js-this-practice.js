let function1 = function(){
    console.log("in the function" , this) //window
}
let function6 = ()=>{
    console.log("in the function6   ",this) //window
}
let object1 = {
    name: "name",
    age: 10,
    function2 : function(){
        console.log("in function2 ", this); //object
        function4 = function(){
            console.log("in function4   ",this) //window
        },
        function5 = ()=>{
            console.log("in function5   ",this) //object
        }
    function4();
    function5();
    },
    function3 : ()=>{
        console.log("in function3  ",this) //window
    }
}
function1();
object1.function2();
object1.function3();
function6();