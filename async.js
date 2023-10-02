function greet(){
    return "hello function"; // normal function
}
greet();

async function agreet(){
    // throw "error";
    return "hello async function";
}
agreet()

.then((result) => {
    console.log("Promise Resolve : - ",result);
}) 
.catch((err) => {
    console.log("Weak connection" , err);
});

//Async With rrow Fn =>
let fn = async ()=>{
    return "async fn"
}
// fn(); //=> Promis return // state => fulfill // result => arrow fn


//await keyword 
function demo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();

        }, 1000);
    });
};

async function dem() {
    await demo(1000);
    await demo(1000);
    dem();

};

let div = document.querySelector("div");

function bgcolor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            div.style.backgroundColor = color;
            console.log(`color is ${color}`)
            resolve("color changed");
        }, delay);
    })
};

async function clr() {
    try {
        await bgcolor("orange", 1000);
        await bgcolor("yellow", 1000);
        await bgcolor("purple", 1000);   // this is error handling
        await bgcolor("green", 1000);
         await bgcolor("blue", 1000);
    } catch (err){
        console.log("error cought" ,err);
        
    }
    
}