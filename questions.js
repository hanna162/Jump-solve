const questionBank = [

    {
        question: "3 + 5 = ?",
        options: [7,8,9],
        answer: 8
    },


    {
        question: "6 + 4 = ?",
        options: [9,10,11],
        answer: 10
    },


    {
        question: "9 - 3 = ?",
        options: [5,6,7],
        answer: 6
    },


    {
        question: "12 - 5 = ?",
        options: [6,7,8],
        answer: 7
    },


    {
        question: "7 + 8 = ?",
        options: [14,15,16],
        answer: 15
    },


    {
        question: "15 - 6 = ?",
        options: [8,9,10],
        answer: 9
    },


    {
        question: "5 + 9 = ?",
        options: [13,14,15],
        answer: 14
    },


    {
        question: "18 - 9 = ?",
        options: [8,9,10],
        answer: 9
    },


    {
        question: "4 + 7 = ?",
        options: [10,11,12],
        answer: 11
    },


    {
        question: "20 - 8 = ?",
        options: [11,12,13],
        answer: 12
    }

];



// Simpan soalan terakhir

let previousQuestion = -1;



function getRandomQuestion(){


    let index;


    do {

        index =
        Math.floor(
            Math.random()*questionBank.length
        );


    }

    while(index === previousQuestion);



    previousQuestion = index;


    return questionBank[index];

}
