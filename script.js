let music=new Audio("music.mp3")
let audioTurn=new Audio("ting.mp3")
let gameOverMusic=new Audio("gameover.mp3")

let turn="X"
let isgameOver=false

//function to change turn
const changeTurn=()=>{
    return turn==="X"?"0":"X"
}

function checkWin(){
    let boxtext = document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2], // this is e  e0 e1 e2
        [3,4,5], // e
        [6,7,8], //e
        [0,3,6], //e
        [1,4,7], //e
        [2,5,8],    //e
        [0,4,8],    //e
        [2,4,6] //e
    ]
    let isBoardFull = true; // Flag to track if the board is full
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText=== boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText!=='')){
            // console.log(boxtext[e[0]]) //returns span 
            document.getElementsByClassName('info')[0].innerText=boxtext[e[0]].innerText +" Won"
            isgameOver=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
            music.play()
            
            // boxes.forEach((box) => {
            //     box.removeEventListener("click", boxClickHandler);
            // });
            boxes[e[0]].classList.add('win')
            boxes[e[1]].classList.add('win')
            boxes[e[2]].classList.add('win')


        }
       
    })

    //check if all the boxes are filled and no one has won
    for(let i=0;i<boxtext.length;i++){
        if(boxtext[i].innerText===''){
            isBoardFull=false
            break
        }
    }

    if(isBoardFull && !isgameOver){
        document.getElementsByClassName('info')[0].innerText = "Game Over - It's a draw!";
        isgameOver=true
        gameOverMusic.play()
    }
}

let boxes=document.querySelectorAll('.box')
boxes.forEach(element=>{
    let boxtext=element.querySelector('.boxText')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn
            turn=changeTurn();
            audioTurn.play();
            checkWin()
            if(!isgameOver){
                document.getElementsByClassName('info')[0].innerText="Current Player-"+turn
            }
        }
    })
})

const reset=document.querySelector('.resetBtn')
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameOver = false
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
    document.getElementsByClassName('info')[0].innerText="Current Player-"+turn
    music.pause()
    boxes.forEach(box => {
        box.classList.remove('win');
    });


})