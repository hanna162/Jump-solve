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

let currentLevel = "level1";

let currentQuestion = null;


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


const gravity = 0.8;


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
y:390,
collected:false
},

{
x:600,
y:310,
collected:false
}

];


// =======================
// START GAME
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
    player.jumping === false
    ){

        player.velocityY = -15;

        player.jumping = true;

    }



    player.velocityY += gravity;

    player.y += player.velocityY;



    // Collision platform

    platforms.forEach(platform=>{


        if(

        player.x < platform.x + platform.width &&

        player.x + player.width > platform.x &&

        player.y + player.height > platform.y &&

        player.y + player.height < platform.y + platform.height + 20

        ){

            player.y =
            platform.y - player.height;


            player.velocityY = 0;

            player.jumping = false;

        }


    });



    // Jika jatuh

    if(player.y > canvas.height){


        lives--;


        document
        .getElementById("lives")
        .innerHTML=lives;


        player.x=100;

        player.y=400;



        if(lives<=0){

            endGame();

        }

    }


}



// =======================
// SISTEM SYILING
// =======================


function collectCoins(){


    coinItems.forEach(coin=>{


        if(!coin.collected){


            let distance =
            Math.abs(player.x-coin.x)
            +
            Math.abs(player.y-coin.y);



            if(distance < 60){


                coin.collected=true;


                coins++;

                score += 10;



                document
                .getElementById("coins")
                .innerHTML=coins;



                document
                .getElementById("score")
                .innerHTML=score;



                // selepas kutip syiling
                // keluar soalan matematik

                showQuestion();


            }

        }


    });


}



// =======================
// PAPAR SOALAN
// =======================


function showQuestion(){


    currentQuestion =
    getQuestion(currentLevel);



    if(!currentQuestion){

        return;

    }



    document
    .getElementById("question")
    .innerHTML =
    currentQuestion.question;



    let buttons =
    document.querySelectorAll(".answer");



    buttons.forEach((button,index)=>{


        button.innerHTML =
        currentQuestion.options[index];



        button.onclick=function(){


            checkPlayerAnswer(
            Number(button.innerHTML)
            );


        };


    });



    document
    .getElementById("question-box")
    .classList.remove("hidden");


}



// =======================
// SEMAK JAWAPAN
// =======================


function checkPlayerAnswer(answer){


    if(
    answer === currentQuestion.answer
    ){


        score += 100;



        document
        .getElementById("score")
        .innerHTML=score;


    }

    else{


        lives--;


        document
        .getElementById("lives")
        .innerHTML=lives;


        if(lives<=0){

            endGame();

        }

    }



    document
    .getElementById("question-box")
    .classList.add("hidden");


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



    // Latar belakang

    ctx.fillStyle="#8ed6ff";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    // Platform

    ctx.fillStyle="#8B4513";


    platforms.forEach(platform=>{


        ctx.fillRect(
            platform.x,
            platform.y,
            platform.width,
            platform.height
        );


    });



    // Syiling

    coinItems.forEach(coin=>{


        if(!coin.collected){


            ctx.fillStyle="gold";


            ctx.beginPath();


            ctx.arc(
                coin.x,
                coin.y,
                12,
                0,
                Math.PI*2
            );


            ctx.fill();


        }


    });



    // Watak pemain

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


    if(!gameStarted){

        return;

    }



    updatePlayer();


    collectCoins();


    draw();



    requestAnimationFrame(
        gameLoop
    );


}



// =======================
// GAME OVER
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



// =======================
// MAIN SEMULA
// =======================


document
.getElementById("restart-btn")
.onclick=function(){


    score=0;

    coins=0;

    lives=3;



    document
    .getElementById("score")
    .innerHTML=0;


    document
    .getElementById("coins")
    .innerHTML=0;


    document
    .getElementById("lives")
    .innerHTML=3;



    document
    .getElementById("game-over")
    .classList.add("hidden");



    player.x=100;

    player.y=400;



    gameStarted=true;


    gameLoop();


};};
