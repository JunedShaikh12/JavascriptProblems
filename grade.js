function calculateGrade(marks, attendance) {
    // Add 5 extra marks if attendance is above 90%
    if (attendance > 90) {
      marks += 5;
    }
  
    // Determine the grade based on marks
    let grade = '';
    if (marks >= 90) {
      grade = 'A';
    } else if (marks >= 80) {
      grade = 'B';
    } else if (marks >= 70) {
      grade = 'C';
    } else if (marks >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }
  
    return grade;
  }
  
  let marks = 85;
let attendance = 92; // Extra credit applies (attendance > 90%)
let grade = calculateGrade(marks, attendance);
console.log(grade);  // Output: "A" (marks will become 90 after adding 5 extra)

marks = 75;
attendance = 80;
grade = calculateGrade(marks, attendance);
console.log(grade);  // Output: "C" (no extra credit as attendance is below 90%)

marks = 55;
attendance = 95;
grade = calculateGrade(marks, attendance);
console.log(grade);  // Output: "C" (marks will become 60 after adding extra credit)
