function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let classCharge = 0;
    let luggageCharge = 0;
    let discount = 0;

    // Additional charges based on class type
    if (classType === "Business") {
        classCharge = 200;
    } else if (classType === "First") {
        classCharge = 500;
    }

    // Luggage charges: +$50 per 10kg over 20kg
    if (luggageWeight > 20) {
        luggageCharge = Math.ceil((luggageWeight - 20) / 10) * 50;
    }

    // Calculate total cost before discounts
    let totalFare = baseFare + classCharge + luggageCharge;

    // Apply discounts
    if (isStudent) {
        discount = totalFare * 0.15; // 15% off for students
    } else if (isSenior) {
        discount = totalFare * 0.10; // 10% off for seniors
    }

    // Final fare after applying discount
    let finalFare = totalFare - discount;

    return `Final Ticket Price: $${finalFare.toFixed(2)}`;
}

// Test cases
console.log(calculateFlightFare("Economy", 15, false, false));  // $300.00 (No extra charges)
console.log(calculateFlightFare("Business", 25, false, false)); // $550.00 ($200 Business + $50 luggage)
console.log(calculateFlightFare("First", 35, true, false));     // $680.00 ($800 - 15% student discount)
console.log(calculateFlightFare("Economy", 30, false, true));   // $360.00 ($400 - 10% senior discount)
console.log(calculateFlightFare("Business", 50, true, false));  // $850.00 ($1000 - 15% student discount)
