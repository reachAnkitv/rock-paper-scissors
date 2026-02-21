let pl=document.querySelector("#choose");
let rock=document.querySelector("#i1");
let paper=document.querySelector("#i2");
let scissor=document.querySelector("#i3");
let compchoice=()=>{
    const ar=["rock","paper","scissor"];
    let num=Math.floor(Math.random()*3);
    // console.log(num);
    return ar[num];
}
let updateyours=()=>{
    let zz=document.querySelector("#ys").innerHTML;
    let mm=+zz;
    document.querySelector("#ys").innerHTML =mm+1;
}
let updatecomps=()=>{
    let zz=document.querySelector("#cs").innerHTML;
    let mm=+zz;
    document.querySelector("#cs").innerHTML =mm+1;
}


let winner=(b)=>{
    let a=compchoice();
    if(b==="rock" && a==="rock"){
        pl.innerHTML="DRAW";
        return ;
    }
    else if(b==="rock" && a==="paper"){
        updatecomps();
        pl.innerHTML="YOU LOSE";
        return ;
        }
    else if(b==="rock" && a==="scissor"){
        updateyours();
        pl.innerHTML="YOU WON";
        return ;
        }
    else if(b==="paper" && a==="paper"){
        updateyours();
        updatecomps();
        pl.innerHTML="DRAW";
        return ;
        }
    else if(b==="paper" && a==="rock"){
        updateyours();
        pl.innerHTML="YOU WON";
        return ;
        }
    else if(b==="paper" && a==="scissor"){
        updatecomps();
        pl.innerHTML="YOU LOSE";
        return ;
    }
    else if(b==="scissor" && a==="scissor"){
        updateyours();
        updatecomps();
        pl.innerHTML="DRAW";
        return ;
    }
    else if(b==="scissor" && a==="rock"){
        updatecomps();
        pl.innerHTML="YOU LOSE";
        return ;
    }
    else if(b==="scissor" && a==="paper"){
        updateyours();
        pl.innerHTML="YOU WON";
        return ;
    }
    
}
pl.addEventListener("click",both=>{
    pl.innerHTML="SELECT";
});

// rock.addEventListener("click",PRIN=>{
//     console.log("HERE");
// });
rock.addEventListener("click",()=>winner("rock"));
paper.addEventListener("click",()=>winner("paper"));
scissor.addEventListener("click",()=>winner("scissor"));