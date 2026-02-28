let rs=document.querySelector("#r");
let ps=document.querySelector("#p");
let ss=document.querySelector("#s");
let submit=document.querySelector("#btn");
let scorecomp=document.querySelector("#cs");
let scoreyou=document.querySelector("#ys");
let scoredraw=document.querySelector("#ds");
let reset=document.querySelector("#rst");
let upc=()=>{
    let xx=Number(scorecomp.innerHTML);
    scorecomp.innerHTML=xx+1;
}
let upy=()=>{
    let xx=Number(scoreyou.innerHTML);
    scoreyou.innerHTML=xx+1;
}
let upd=()=>{
    let xx=Number(scoredraw.innerHTML);
    scoredraw.innerHTML=xx+1;
}
let Work=(a,b)=>{
    if (a===b){
        submit.innerHTML="DRAW!";
    submit.style.backgroundColor="yellow";
    upd();
    return;
    } 
    else {
        if(a==="r"){
            if(b==="s"){
               submit.innerHTML="COMP WIN!";
    submit.style.backgroundColor="red";
    upc();
    return;
            }
            
            else{
                submit.innerHTML="YOU WIN!";
    submit.style.backgroundColor="green";
    upy();
    return;
            } 
        }
        else if(a==="p"){

            if(b==="r"){
                submit.innerHTML="COMP WIN!";
                submit.style.backgroundColor="red";
                upc();
                return;
            }
            else{
                submit.innerHTML="YOU WIN!";
    submit.style.backgroundColor="green";
    upy();
    return;
            }
        }
        else if(a==="s"){
            if(b==="p"){
                submit.innerHTML="COMP WIN!";
    submit.style.backgroundColor="red";
    upc();
    return;
            } 
            else {
                submit.innerHTML="YOU WIN!";
    submit.style.backgroundColor="green";
    upy();
    return;
            } 
        }
    
    }

}
let compgen=()=>{
    let num=Math.random()*3;
    let ar=["r","p","s"];
    return ar[Math.floor(num)];

}
rs.addEventListener("click",()=>{
    let com=compgen();
    let curr="r";
    Work(com,curr);
    
})
ps.addEventListener("click",()=>{
    let com=compgen();
    let curr="p";
    Work(com,curr);
})
ss.addEventListener("click",()=>{
    let com=compgen();
    let curr="s";
   Work(com,curr);
})
reset.addEventListener("click",()=>{
    scorecomp.innerHTML=0;
    scoreyou.innerHTML=0;
    scoredraw.innerHTML=0;
})

