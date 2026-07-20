const level1 = {

    name: "Number Forest 🌳",

    background: "forest",


    // kedudukan pemain mula
    playerStart:{
        x:80,
        y:450
    },


    // platform dunia
    platforms:[

        {
            x:0,
            y:550,
            width:900,
            height:50
        },

        {
            x:180,
            y:450,
            width:120,
            height:20
        },

        {
            x:370,
            y:380,
            width:130,
            height:20
        },

        {
            x:600,
            y:300,
            width:150,
            height:20
        },

        {
            x:780,
            y:220,
            width:100,
            height:20
        }

    ],



    // syiling
    coins:[

        {
            x:230,
            y:410,
            collected:false
        },

        {
            x:430,
            y:340,
            collected:false
        },

        {
            x:650,
            y:260,
            collected:false
        }

    ],



    // tempat soalan muncul

    questions:[

        {
            x:320,
            y:500,
            answered:false
        },

        {
            x:560,
            y:350,
            answered:false
        }

    ],



    // pintu tamat

    finishDoor:{

        x:830,
        y:170,

        width:40,
        height:60

    }

};
