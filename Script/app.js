const lightTheme = "styles/style.light.css";
const darkTheme = "styles/style.dark.css";
const sunIcon = "assests/SunIcon.svg";
const moonIcon = "assests/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

// function calculate(value) {
//   const calculatedValue = eval(value || null);
//   if (isNaN(calculatedValue)) {
//     res.value = "Can't divide 0 with 0";
//     setTimeout(() => {
//       res.value = "";
//     }, 1300);
//   } else {
//     res.value = calculatedValue;
//   }
// }
function calculate(value) {
    try {
        // Check if the input is empty or ends with an operator
        if (!value || ['+', '-', '*', '/'].includes(value[value.length - 1])) {
            res.value = "Invalid input";
            setTimeout(() => {
                res.value = "";
            }, 1000);
            return;
        }

        // Check for consecutive operators
        if (/[+\-*/]{2,}/.test(value)) {
            res.value = "Invalid sequence";
            setTimeout(() => {
                res.value = "";
            }, 1000);
            return;
        }

        // Evaluate the expression
        const calculatedValue = eval(value);

        // Check for NaN (e.g., division by zero)
        if (isNaN(calculatedValue)) {
            res.value = "Can't divide 0 by 0";
            setTimeout(() => {
                res.value = "";
            }, 1500);
        } else {
            res.value = calculatedValue;
        }
    } catch (error) {
        // Catch any other errors and display an appropriate message
        res.value = "Error";
        setTimeout(() => {
            res.value = "";
        }, 1500);
    }
}


//Swaps the stylesheet to achieve dark mode.
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode ☀️";
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

//adding event handler on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

//function to handle keyboard inputs
function keyboardInputHandler(e) {
  // to fix the default behavior of browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();
  //grabbing the liveScreen

  //numbers
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operators
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimal key
  if (e.key === ".") {
    res.value += ".";
  }

  //press enter to see result
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
// add a function for to change aolor of result block when vanish the result
function clearResult() {
  const result = document.getElementById('result');
  const clearButton = document.getElementById('clear-button');

  // Start vanish animation
  result.classList.add('vanish');
  
  // After the vanish, reset the color and opacity
  setTimeout(() => {
      result.classList.remove('vanish');
      result.classList.add('reset');

      // Optional: If you want the reset to happen after another delay
      setTimeout(() => {
          result.classList.remove('reset');
          clearButton.classList.add('reset');
      }, 500); // Wait for the vanish to complete before resetting
  }, 500); // This timeout should match the CSS transition duration
}