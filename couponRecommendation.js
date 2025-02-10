function applyCoupon(orderAmount, couponCode) {
    let discount = 0;
    let shippingCost = 0;

    // Apply coupon discounts
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        discount = orderAmount * 0.10; // 10% off
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        shippingCost = 0; // Free shipping
    }

    // If no valid coupon is applied, normal shipping rules apply
    if (shippingCost === 0 && couponCode !== "FREESHIP") {
        shippingCost = orderAmount > 50 ? 0 : 10; // Free shipping above $50, otherwise $10
    }

    // Calculate final price
    let finalAmount = orderAmount - discount + shippingCost;

    return `Final payable amount: $${finalAmount.toFixed(2)}`;
}

// Test cases
console.log(applyCoupon(600, "DISCOUNT10")); // $540.00
console.log(applyCoupon(250, "FREESHIP"));   // $250.00
console.log(applyCoupon(450, "DISCOUNT10")); // No discount, final: $450.00
console.log(applyCoupon(100, "FREESHIP"));   // No free shipping, final: $110.00
console.log(applyCoupon(50, ""));            // $60.00 (No coupon, $10 shipping)
console.log(applyCoupon(550, "FREESHIP"));   // $550.00 (Only free shipping applied)
