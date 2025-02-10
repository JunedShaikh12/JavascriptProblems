function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    // Define plan costs
    const plans = {
        Basic: 20,     // Only Gym
        Premium: 50,   // Gym + Trainer
        VIP: 80        // Gym + Trainer + Diet Plan
    };

    // Check the best plan based on user preference
    if (wantsDietPlan) {
        return `Recommended Plan: VIP ($${plans.VIP}/month) - Includes Gym + Trainer + Diet Plan.`;
    } else if (wantsTrainer) {
        return `Recommended Plan: Premium ($${plans.Premium}/month) - Includes Gym + Trainer.`;
    } else {
        return `Recommended Plan: Basic ($${plans.Basic}/month) - Includes Only Gym Access.`;
    }
}

// Test cases
console.log(choosePlan("Basic", false, false));  // Basic Plan
console.log(choosePlan("Basic", true, false));   // Premium Plan
console.log(choosePlan("Basic", true, true));    // VIP Plan
console.log(choosePlan("Premium", false, false)); // Basic Plan (if no trainer or diet)
console.log(choosePlan("VIP", true, true));      // VIP Plan
