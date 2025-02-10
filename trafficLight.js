function trafficLightControl(density) {
    let greenLightDuration = 0;

    // Determine green light duration based on traffic density
    if (density === "Heavy Traffic") {
        greenLightDuration = 60;  // 60 seconds for heavy traffic
    } else if (density === "Moderate Traffic") {
        greenLightDuration = 40;  // 40 seconds for moderate traffic
    } else if (density === "Light Traffic") {
        greenLightDuration = 20;  // 20 seconds for light traffic
    } else {
        return "Invalid traffic density";  // Handle invalid input
    }

    return `Green light will stay on for ${greenLightDuration} seconds.`;
}


let density = "Heavy Traffic";
let result = trafficLightControl(density);
console.log(result);  // Output: "Green light will stay on for 60 seconds."

density = "Moderate Traffic";
result = trafficLightControl(density);
console.log(result);  // Output: "Green light will stay on for 40 seconds."

density = "Light Traffic";
result = trafficLightControl(density);
console.log(result);  // Output: "Green light will stay on for 20 seconds."

density = "Very Heavy Traffic";  // Invalid input
result = trafficLightControl(density);
console.log(result);  // Output: "Invalid traffic density"
