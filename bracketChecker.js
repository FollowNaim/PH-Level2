import Stack from "./stack.js";

const bracketChecker = (str) => {
  const stack = new Stack();
  const bracketMap = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char == "(" || char == "[" || char == "{") {
      stack.push(char);
    } else if (char == "]" || char == ")" || char == "}") {
      if (stack.isEmpty() || stack.pop() !== bracketMap[char]) {
        console.log("hittign else if");
        console.log(stack.isEmpty());
        console.log(stack.pop());
        console.log(bracketMap[char]);
        return false;
      }
      console.log(stack);
    }
  }
  return stack.isEmpty();
};

console.log(bracketChecker("(()"));
