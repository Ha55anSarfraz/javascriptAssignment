// function hello()
// {
//     console.log("hey");
// }
// setTimeout(hello , 3000);
// setTimeout(() => console.log("heyyy") , 3500)
// function sum(a , b)
// {
//     console.log(a+b);
// }
// function minus(a , b)
// {
//     console.log(a-b);
// }
// function divide(a , b)
// {
//     console.log(a/b);
// }
// function multiply(a , b)
// {
//     console.log(a*b);
// }
// function calculator(a , b , Callback)
// {
//     Callback(a , b);
// }
// calculator(30 , 3 , divide);



let promise = new Promise((resolve , reject) =>
{
    console.log("promis");
    resolve("rej");
    
})