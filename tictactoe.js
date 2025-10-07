let boxx = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msgcon = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new");
let winnermsg = document.querySelector("#msg");

let turn = true; //turn = true --> playerO ,  turn = false --> playerX

const winpat = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];


const resetgame = () =>
{
    turn = true;
    enablebtn();
    msgcon.classList.add("hide");

}
boxx.forEach((box) =>
{
    box.addEventListener("click", () => 
    {
        console.log("clicked");
        if(turn)
        {
            box.innerText = "O";
            turn = false;
        }
        else
        {
            box.innerText = "X";
            turn = true;
        } 
        box.disabled = true;
        checkwin(); 
    })    
})

const disablebtn = () =>
{
    for(let box of boxx)
    {
        box.disabled = true;
    }
}

const enablebtn = () =>
{
    for(let box of boxx)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => 
{
    winnermsg.innerText = `Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disablebtn();
}

const checkwin = () =>
{
    for(let pattern of winpat)
    {
        let pos1 = boxx[pattern[0]].innerText;
        let pos2 = boxx[pattern[1]].innerText; 
        let pos3 = boxx[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 === pos2 && pos2 === pos3)
            {
                console.log("winner" , pos1);
                showwinner(pos1);
            }
        }
    }



}

newbtn.addEventListener("click" , resetgame);
reset.addEventListener("click" , resetgame);