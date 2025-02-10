function calculateGrade(marks, attendance) {
    if (attendance > 90) {
      marks += 5;
    }
  
    let grade = "";
    if (marks >= 90) {
      grade = "A";
    } else if (marks >= 80) {
      grade = "B";
    } else if (marks >= 70) {
      grade = "C";
    } else if (marks >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    return grade;
  }
  