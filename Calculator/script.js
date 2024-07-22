let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

let calc = function () {
  try {
    string = eval(string).toString(); // Ensure result is always a string
    input.value = string;
  } catch (e) {
    input.value = "Error";
    string = "";
  }
};

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      calc();
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

// Key Press EVENTS
document.addEventListener("keydown", function (e) {
  e.preventDefault(); // Prevent the default action
  console.log(e.key);
  if (e.key === "Enter" || e.key === "=") {
    calc();
  } else if (e.key === "Backspace") {
    string = string.substring(0, string.length - 1);
    input.value = string;
  } else if (e.key === "Escape") {
    string = "";
    input.value = string;
  } else if (/[0-9+\-*/.]/.test(e.key)) {
    string += e.key;
    input.value = string;
  }
});
