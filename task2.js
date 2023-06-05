//function to evaluate expression using math.js api
async function evaluate(expression) {
    const apiUrl = "https://api.mathjs.org/v4/";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ expr: expression }),
    });
  
    if (response.ok) {
      const data = await response.json();
      return data.result;
    } 
    
    else {
      return "Error:Please enter correct mathematical expression";
    }
  }
  //reading input from user
  async function myfunction() {
    const expressions = [];
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    console.log("Enter expressions (enter 'end' to end):");
    //read expression from input and end the program if input is end
    rl.on("line", (input) => {
      if (input.toLowerCase() === "end") {
        rl.close();
      } else {
        expressions.push(input);
      }
    });
// when user input is finished evaluate and display the results
    rl.on("close", async () => {
      console.log("Results:");
      for (const expression of expressions) {
        const result = await evaluate(expression);
        console.log(`${expression} => ${result}`);
      }
    });
  }
  
  myfunction();
  