
let btn1 = document.querySelector("#btn1");

 let a = 22;
btn1.onclick = (obj) =>
{
    console.log("clicked");
   
    a++;
    console.log("clicked" , a);
}

let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click" , (evt) =>{
    console.log("helo");
});

btn2.addEventListener("click" , (evt) =>{
    console.log("helo2");
});

const handler3 = (evt) =>{
    console.log("helo3");
}



btn2.addEventListener("click" , handler3);

btn2.removeEventListener("click" , handler3);


let mod = document.querySelector("#mode");
let body = document.querySelector("body");
let curmode = "light";

mod.addEventListener("click" , ()=>
{
    if(curmode === "light")
    {
        curmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else
    {
        curmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curmode);  
});
