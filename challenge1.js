function calculateGrade() {
    const marks = parseInt(prompt("Enter student marks (0-100):"));
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return prompt("Invalid: Marks must be between 0 and 100.");
    }
    let grade;
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
    return alert(`Student Grade: ${grade}`)
}

calculateGrade();
