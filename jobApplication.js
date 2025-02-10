function isEligibleForJob(age, experience, qualification) {
    // Check if age is between 21 and 55
    if (age < 21 || age > 55) {
        return "Not Eligible: Age must be between 21 and 55.";
    }

    // Check if experience is at least 2 years
    if (experience < 2) {
        return "Not Eligible: Minimum 2 years of experience required.";
    }

    // Check if qualification is at least "Bachelor's Degree"
    if (qualification !== "Bachelor's Degree") {
        return "Not Eligible: Minimum qualification required is Bachelor's Degree.";
    }

    return "Eligible for the job!";
}

// Test cases
console.log(isEligibleForJob(25, 3, "Bachelor's Degree")); // Eligible
console.log(isEligibleForJob(20, 5, "Bachelor's Degree")); // Not Eligible (Age)
console.log(isEligibleForJob(30, 1, "Bachelor's Degree")); // Not Eligible (Experience)
console.log(isEligibleForJob(40, 4, "Diploma"));           // Not Eligible (Qualification)
console.log(isEligibleForJob(50, 10, "Bachelor's Degree"));// Eligible
