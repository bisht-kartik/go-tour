 console.log("Welcome To Tic Tac Toe");

 let mus=new Audio("music.mp3")
 let turn = new Audio("ting.mp3")
 let gameover= new Audio("gameover.mp3")
 let mark ="X"
 let over=false;

 mus.play()
//  to change the turn
const changemark=()=>{
    return mark==="X"?"0":"X";
}

// to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText==boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!='')){
            document.getElementsByClassName("info")[0].innerText=mark+" WON";
            gameover.play();
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "200px";
            over=true;
        }
    })
}

// game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=mark;
            
            turn.play();
            checkWin();
            mark=changemark();
            if(!over){
                document.getElementsByClassName("info")[0].innerText="TURN FOR "+mark;
            }

        }
        // console.log("kk");
        

    })

})
//resetting the game
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(e=>{
        e.innerText="";
    })
    mark="X";
    over=false;
    document.getElementsByClassName("info")[0].innerText="TURN FOR "+mark;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "0px";

    
})
  