function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shipping = 0;
  
    if (orderAmount > 1000) {
      discount = 0.20 * orderAmount;
    } else if (orderAmount >= 500) {
      discount = 0.10 * orderAmount;
    }
  
    if (orderAmount > 50) {
      shipping = 0;
    } else {
      shipping = 10;
    }
  
    return orderAmount - discount + shipping;
  }
  