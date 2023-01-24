interface StudentName{
    [index:number]:string;
}

var studentNames:StudentName = ["John","Bob", "Doug"];

interface StudentScore{
    [index:string]:number;
}

var studentScores:StudentScore = {};
studentScores["John"] = 90;
studentScores["Bob"] = 100;
studentScores["Doug"] = 59;

for(var score in studentScores) {
    console.log(studentScores[score]);
}