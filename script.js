let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

// Button clicks
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Keyboard input
document.addEventListener("keydown", (e) => {
    if ((e.key >= "0" && e.key <= "9") || e.key === "." || e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" || e.key === "%") {
        string += e.key;
        input.value = string;
    }
    else if (e.key === "Enter" || e.key === "=") {
        calculate();
    }
    else if (e.key === "Backspace") {
        string = string.slice(0, -1);
        input.value = string;
    }
    else if (e.key.toLowerCase() === "c") { // Press 'C' to clear
        string = "";
        input.value = "";
    }
});

function handleInput(value) {
    if (value == "=") {
        calculate();
    }
    else if (value == "AC") {
        string = "";
        input.value = "";
    }
    else if (value == "DEL") {
        string = string.slice(0, -1);
        input.value = string;
    }
    else {
        string += value;
        input.value = string;
    }
}

function calculate() {
    try {
        string = eval(string);
        input.value = string;
    } catch {
        input.value = "Error";
        string = "";
    }
}
