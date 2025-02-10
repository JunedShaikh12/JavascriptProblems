function calculateElectricityBill(units, timeOfDay) {
    let rate;

    // Determine base rate based on consumption
    if (units < 100) {
        rate = 5;
    } else if (units >= 100 && units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }

    // Convert time to 24-hour format and check for peak hours (8 PM - 8 AM)
    if (timeOfDay >= 20 || timeOfDay < 8) {
        rate *= 1.10; // Increase by 10% during peak hours
    }

    // Calculate total bill
    let totalBill = units * rate;
    
    return `Total electricity bill: $${totalBill.toFixed(2)}`;
}

// Test cases
console.log(calculateElectricityBill(50, 10));  // Normal hours, $250.00
console.log(calculateElectricityBill(150, 15)); // Normal hours, $600.00
console.log(calculateElectricityBill(350, 21)); // Peak hours, $1155.00
console.log(calculateElectricityBill(90, 22));  // Peak hours, $495.00
console.log(calculateElectricityBill(200, 7));  // Peak hours, $880.00
