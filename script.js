const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 600;


// =======================
// DATA GAME
// =======================

let gameStarted = false;

let score = 0;
let coins = 0;
let lives = 3;


// =======================
// PEMAIN
// =======================

const player = {

    x:100,
    y:400,

    width:40,
    height:50,

    speed:5,

    velocityY:0,

    jumping:false

};


// =======================
// GRAVITI
// =======================

const gravity = 0.8;


// =======================
// KAWALAN
// =======================

let keys = {};


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
// PLATFORM
// =======================

let platforms=[

{
x:0,
y:550,
width:900,
height:50
},

{
x:250,
y:430,
width:150,
height:20
},

{
x:550,
y:350,
width:150,
height:20
}

];



// =======================
// SYILING
// =======================

let coinItems=[

{
x:300,
y:380,
size:20,
collected:false
},

{
x:600,
y:300,
size:20,
collected:false
}

];




// =======================
// MULAKAN GAME
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
// UPDATE PEMAIN
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



    // collision lantai

    platforms.forEach(platform=>{


        if(

        player.x < platform.x + platform.width &&

        player.x + player.width > platform.x &&

        player.y + player.height > platform.y &&

        player.y + player.height < platform.y + platform.height + 20

        ){

            player.y =
            platform.y-player.height;


            player.velocityY=0;

            player.jumping=false;

        }


    });



    // jatuh

    if(player.y>canvas.height){

        lives--;

        player.x=100;
        player.y=400;


        document
        .getElementById("lives")
        .innerHTML=lives;


        if(lives<=0){

            endGame();

        }

    }


}




// =======================
// KUTIP SYILING
// =======================


function collectCoins(){


coinItems.forEach(coin=>{


if(!coin.collected){


let distance =
Math.abs(player.x-coin.x)
+
Math.abs(player.y-coin.y);



if(distance<50){


coin.collected=true;

coins++;

score+=10;


document
.getElementById("coins")
.innerHTML=coins;


document
.getElementById("score")
.innerHTML=score;


}


}


});


}





// =======================
// LUKIS GAME
// =======================


function draw(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


// platform

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

coinItems.forEach(c=>{


if(!c.collected){

ctx.fillStyle="gold";


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



}




// =======================
// GAME LOOP
// =======================


function gameLoop(){


if(!gameStarted)
return;


updatePlayer();

collectCoins();

draw();


requestAnimationFrame(gameLoop);


}




// =======================
// TAMAT GAME
// =======================


function endGame(){


gameStarted=false;


document
.getElementById("game-over")
.classList.remove("hidden");


document
.getElementById("final-score")
.innerHTML=score;


}
