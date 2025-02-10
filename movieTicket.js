function calculateTicketPrice(age, showTime) {
    let standardPrice = 12;
    let discount = 0;

    // Apply discounts based on age
    if (age > 60) {
        discount = 0.30;  // 30% discount for senior citizens
    } else if (age < 12) {
        discount = 0.40;  // 40% discount for children
    }

    // Apply matinee discount (20% discount for shows before 5 PM)
    if (showTime < 17) {  // 17 is 5 PM in 24-hour format
        discount = Math.max(discount, 0.20); // Apply the highest discount
    }

    // Calculate final ticket price
    let finalPrice = standardPrice * (1 - discount);

    return `Final ticket price: $${finalPrice.toFixed(2)}`;
}

// Test cases
console.log(calculateTicketPrice(65, 14));  // Senior (above 60), Matinee -> $8.40
console.log(calculateTicketPrice(30, 16));  // Matinee -> $9.60
console.log(calculateTicketPrice(10, 18));  // Child -> $7.20
console.log(calculateTicketPrice(40, 19));  // No discount -> $12.00
console.log(calculateTicketPrice(70, 18));  // Senior only -> $8.40
console.log(calculateTicketPrice(8, 14));   // Child and Matinee -> $7.20 (highest discount applies)
