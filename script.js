const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");


canvas.width = 900;
canvas.height = 600;



// =======================
// DATA GAME
// =======================


let gameStarted = false;

let score = 0;

let coinsCollected = 0;

let lives = 3;


let currentQuestion = null;



// =======================
// PEMAIN
// =======================


const player = {


x:level1.playerStart.x,

y:level1.playerStart.y,


width:40,

height:50,


speed:5,


velocityY:0,


jumping:false


};



const gravity = 0.8;



// =======================
// LEVEL DATA
// =======================


let platforms = level1.platforms;


let coins = level1.coins;


let questions = level1.questionPoints;



// =======================
// KAWALAN
// =======================


let keys={};



document.addEventListener(
"keydown",
(e)=>{

keys[e.key]=true;

});


document.addEventListener(
"keyup",
(e)=>{

keys[e.key]=false;

});




// =======================
// START
// =======================


document
.getElementById("start-btn")
.onclick=function(){


document
.getElementById("main-menu")
.classList.add("hidden");



document
.getElementById("hud")
.classList.remove("hidden");



gameStarted=true;


gameLoop();


};





// =======================
// GERAK PEMAIN
// =======================


function updatePlayer(){



if(keys["ArrowRight"]){

player.x += player.speed;

}



if(keys["ArrowLeft"]){

player.x -= player.speed;

}




if(
keys["ArrowUp"] &&
player.jumping===false

){

player.velocityY=-15;

player.jumping=true;

}




player.velocityY += gravity;

player.y += player.velocityY;




platforms.forEach(p=>{


if(

player.x < p.x+p.width &&

player.x+player.width > p.x &&

player.y+player.height > p.y &&

player.y+player.height < p.y+p.height+20

){


player.y=p.y-player.height;


player.velocityY=0;


player.jumping=false;


}


});




// jatuh

if(player.y>canvas.height){


lives--;


document.getElementById("lives").innerHTML=lives;


player.x=level1.playerStart.x;

player.y=level1.playerStart.y;



}



}




// =======================
// SYILING
// =======================


function collectCoins(){


coins.forEach(c=>{


if(!c.collected){


let d=Math.abs(player.x-c.x)
+
Math.abs(player.y-c.y);



if(d<50){


c.collected=true;


coinsCollected++;


score+=10;


document.getElementById("coins").innerHTML=coinsCollected;


document.getElementById("score").innerHTML=score;


}


}


});


}




// =======================
// SOALAN
// =======================


function checkQuestionPoint(){


questions.forEach(point=>{


if(!point.answered){


let d=Math.abs(player.x-point.x)
+
Math.abs(player.y-point.y);



if(d<50){


point.answered=true;


showQuestion();


}


}


});


}




function showQuestion(){


currentQuestion=getRandomQuestion();



document.getElementById("question")
.innerHTML=currentQuestion.question;



let buttons=document.querySelectorAll(".answer");



buttons.forEach((btn,i)=>{


btn.innerHTML=currentQuestion.options[i];



btn.onclick=function(){


if(
Number(btn.innerHTML)
===
currentQuestion.answer

){


score+=100;


}

else{


lives--;


}



document.getElementById("score").innerHTML=score;


document.getElementById("lives").innerHTML=lives;



document
.getElementById("question-box")
.classList.add("hidden");



};



});



document
.getElementById("question-box")
.classList.remove("hidden");


}




// =======================
// LUKIS
// =======================


function draw(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



// langit

ctx.fillStyle="#87ceeb";

ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);



// tanah

ctx.fillStyle="#8B4513";


platforms.forEach(p=>{


ctx.fillRect(
p.x,
p.y,
p.width,
p.height
);


});




// syiling

ctx.fillStyle="gold";


coins.forEach(c=>{


if(!c.collected){


ctx.beginPath();


ctx.arc(
c.x,
c.y,
10,
0,
Math.PI*2
);


ctx.fill();


}


});




// pemain

ctx.fillStyle="red";


ctx.fillRect(
player.x,
player.y,
player.width,
player.height
);




// pintu tamat

ctx.fillStyle="purple";


ctx.fillRect(
level1.finish.x,
level1.finish.y,
level1.finish.width,
level1.finish.height
);


}




// =======================
// LOOP
// =======================


function gameLoop(){


if(!gameStarted)return;


updatePlayer();


collectCoins();


checkQuestionPoint();


draw();



requestAnimationFrame(gameLoop);


}
