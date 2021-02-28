const num = prompt("Enter a number: ");
let result = document.getElementById('result');
if (num % 2 == 0) {
    result.innerText = "Even number!";
}
else {
    result.innerText = "Odd number!";
}