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
  //reading input
  async function myfunction() {
    const expressions = [];
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    console.log("Enter expressions (enter 'end' to end):");
    rl.on("line", (input) => {
      if (input.toLowerCase() === "end") {
        rl.close();
      } else {
        expressions.push(input);
      }
    });
  
    rl.on("close", async () => {
      console.log("Results:");
      for (const expression of expressions) {
        const result = await evaluate(expression);
        console.log(`${expression} => ${result}`);
      }
    });
  }
  
  myfunction();
  