var studentNames = ["John", "Bob", "Doug"];
var studentScores = {};
studentScores["John"] = 90;
studentScores["Bob"] = 100;
studentScores["Doug"] = 59;
for (var score in studentScores) {
    console.log(studentScores[score]);
}
