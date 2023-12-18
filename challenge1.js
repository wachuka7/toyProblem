function calculateGrade() {
    //a prompt is sent to the user, for them to input the marks
    const marks = parseInt(prompt("Enter student marks (0-100):"));
    if (isNaN(marks) || marks < 0 || marks > 100) {
        //the marks should be 0-100, or else won't be graded
        return prompt("Invalid: Marks must be between 0 and 100.");
    }
    let grade;
    //the grading criteria
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    //an alert showing grades according to the marks
    return alert(`Student Grade: ${grade}`)
}
//calling the calculate grade function
calculateGrade();
