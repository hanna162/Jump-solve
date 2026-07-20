const questionBank = {


    // ======================
    // TAHUN 1
    // ======================


    level1:[

        {
            question:"4 + 3 = ?",
            answer:7,
            options:[6,7,8]
        },

        {
            question:"8 + 5 = ?",
            answer:13,
            options:[12,13,14]
        },

        {
            question:"9 - 4 = ?",
            answer:5,
            options:[4,5,6]
        },

        {
            question:"12 - 7 = ?",
            answer:5,
            options:[3,5,7]
        },

        {
            question:"6 + 9 = ?",
            answer:15,
            options:[14,15,16]
        }

    ],



    // ======================
    // TAHUN 2
    // ======================


    level4:[

        {
            question:"125 + 230 = ?",
            answer:355,
            options:[345,355,365]
        },

        {
            question:"500 - 245 = ?",
            answer:255,
            options:[245,255,265]
        },

        {
            question:"24 × 3 = ?",
            answer:72,
            options:[62,72,82]
        },

        {
            question:"6 × 8 = ?",
            answer:48,
            options:[46,48,56]
        }

    ],



    level5:[

        {
            question:"7 × 4 = ?",
            answer:28,
            options:[24,28,32]
        },

        {
            question:"9 × 5 = ?",
            answer:45,
            options:[35,45,55]
        },

        {
            question:"12 × 3 = ?",
            answer:36,
            options:[26,36,46]
        }

    ],



    // ======================
    // TAHUN 3
    // ======================


    level7:[

        {
            question:"345 + 678 = ?",
            answer:1023,
            options:[1013,1023,1033]
        },


        {
            question:"900 - 456 = ?",
            answer:444,
            options:[434,444,454]
        },


        {
            question:"25 × 12 = ?",
            answer:300,
            options:[250,300,350]
        }


    ],



    level8:[

        {
            question:"144 ÷ 12 = ?",
            answer:12,
            options:[10,12,14]
        },


        {
            question:"96 ÷ 8 = ?",
            answer:12,
            options:[11,12,13]
        }

    ]

};



// ======================
// SISTEM SOALAN
// ======================


let lastQuestion = null;


function getQuestion(level){


let list =
questionBank[level];



if(!list){

return null;

}



let random;



do{

random =
Math.floor(
Math.random()*list.length
);


}

while(
random===lastQuestion
);



lastQuestion=random;



return list[random];


}



// SEMAK JAWAPAN


function checkAnswer(
selected,
correct
){


if(selected===correct){

return true;

}

else{

return false;

}

}
