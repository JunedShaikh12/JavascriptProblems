function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
      return "Incorrect PIN";
    }
    if (amount > balance) {
      return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
      return "Enter amount in multiples of 100";
    }
    return `Withdrawal successful. Remaining balance: $${balance - amount}`;
  }
  