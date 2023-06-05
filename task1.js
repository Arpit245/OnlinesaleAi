// Function to generate outcome based on probabilities
function generate(outcomes) {
    const totalProbability = outcomes.reduce((sum, outcome) => sum + outcome.probability, 0);
    let randomNum = Math.random() * totalProbability;
  
  // Iterate through outcomes and determine which one occurs
    for (const outcome of outcomes) {
      randomNum -= outcome.probability;
      if (randomNum <= 0) {
        return outcome.value;
      }
    }
  }
  
  function myfunction(outcomes, numOccurrences) {
    const occurrences = {};
   // Initialize occurrences object with outcome values as keys and initial count of 0
    for (const outcome of outcomes) {
      occurrences[outcome.value] = 0;
    }
  // Simulate the event and increment the count for each outcome
    for (let i = 0; i < numOccurrences; i++) {
      const outcome = generate(outcomes);
      occurrences[outcome]++;
    }
  
    return occurrences;
  }
  
  // Example usage
  const outcomes = [
    { value: "Head", probability: 35 },
    { value: "Tail", probability: 65 }
  ];
  
  const numOccurrences = 1000;
  // call the function and get the result
  const result = myfunction(outcomes, numOccurrences);
  // Display the occurrences on the console
  console.log(result);
  