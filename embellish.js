let userAns=[];
let corAns=[];
let numCor=0;

let createQuestion=function(questionText, choice1, choice2, choice3, choice4, correctChoice){
    userAns.push(prompt(questionText + "\nYour choices are: \n" + " A: " + choice1 + " B: " + choice2 + " C: " + choice3 + " D: " + choice4));
    corAns.push(correctChoice);


};

let makeQuiz=function(){
    createQuestion("What number is above 10?", "5","3","12","-3", "C");
    createQuestion("What number is below 0?", "5","3","12","-3", "D");
    createQuestion("What number is less than 10 but greater than 4?", "5","3","12","-3", "A");
    createQuestion("What number is the second smallest?", "5","3","12","-3", "B");


};

let checkScore=function(){
    for(let i=0; i<corAns.length;i++){
        if(userAns[i].toLowerCase() == corAns[i].toLowerCase()){
            numCor++;
        }
    }
};

let quizItUp=function(){
    makeQuiz();
    checkScore();
    alert("You got " + numCor + " of " + userAns.length + " questions");
};