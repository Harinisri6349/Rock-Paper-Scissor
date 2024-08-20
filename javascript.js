let player=confirm("Are you sure want to paly Rock ,Paper and Scissor game?");
if(player)
{
    let choice=prompt("Enter your choice");
    if(choice)
    {
        let play=choice.trim().toLowerCase();
        if(play==="rock" || play==="paper" || play==="scissor")
        {
            let comp=Math.floor(Math.random()*3+1);
            let c=comp===1?"rock":comp===2?"paper":"scissor";
            let res = play===c?"Tie":
            play==="rock" && c==="paper"?"computer win!":
            play==="scissor" && c==="rock"?"computer win!":
            play==="paper" && c==="scissor"?"computer win!":
            "You win!!!";
            alert(res);
            let p=confirm("Do you want to play again?");
            p?location.reload():alert("Ok, thank you");
        }
        else{
            alert("You didn't enter eock or paper or scissor");
        }
    }
    else
    {
        alert("I think you changed your mind");
    }
}
else
{
    alert("You didn't respond");
}