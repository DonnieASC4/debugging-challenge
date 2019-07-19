// Point of View

function prompt(str) {
  const lastIndex = str.length - 1;
  if (str.charCodeAt(lastIndex) === 63) {
    return "l3fT";
  }
  return "riGHt";
}

function promptDirection(str) {
  let result = prompt(str);
  if (result.toLowerCase() === "left") return "L";
  if (result.toLowerCase() === "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function look() {
  if (promptDirection("Which way?") === "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see ", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
// Expected result: "You see two angry bears"

// How to debug and modify the code to achieve the expected result?
