 
 // Exchange rates - example hardcoded rates
const rates = {
USD: { USD: 1, EUR: 0.92, FRW: 1250, KES: 140, INR: 83, GBP: 0.78 },
EUR: { USD: 1.09, EUR: 1, FRW: 1350, KES: 152, INR: 90, GBP: 0.85 },
FRW: { USD: 0.0008, EUR: 0.00074, FRW: 1, KES: 0.11, INR: 0.066, GBP:
0.00063 },
KES: { USD: 0.0071, EUR: 0.0066, FRW: 9.1, KES: 1, INR: 0.60, GBP:
0.0054 },
INR: { USD: 0.012, EUR: 0.011, FRW: 15, KES: 1.67, INR: 1, GBP: 0.0094
},
GBP: { USD: 1.28, EUR: 1.18, FRW: 1580, KES: 185, INR: 106, GBP: 1 }
};
function convert() {
const amount = parseFloat(document.getElementById('amount').value);
const from = document.getElementById('fromCurrency').value;
const to = document.getElementById('toCurrency').value;
if (isNaN(amount) || amount <= 0) {
document.getElementById('result').textContent = "Please enter a validamount.";
return;
}
const rate = rates[from][to];
const converted = amount * rate;
document.getElementById('result').textContent =
`${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
// Calculator
let expression = "";
function press(val) {
expression += val;
document.getElementById('calcDisplay').value = expression;
}
function calculate() {
try {
const result = eval(expression);
document.getElementById('calcDisplay').value = result;
expression = result.toString();
} catch {
alert('Invalid expression');
}
}
function clearDisplay() {
expression = "";
document.getElementById('calcDisplay').value = "";
}
    
        let currentInput = '';
        let currentOperation = '';
        let previousInput = '';

        function appendNumber(number) {
            currentInput += number;
            document.getElementById('display').value = `${previousInput} ${currentOperation} ${currentInput}`;
        }

        function appendOperation(operation) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate(); // Calculate the previous operation before appending a new one
            }
            currentOperation = operation;
            previousInput = currentInput;
            currentInput = '';
            document.getElementById('display').value = `${previousInput} ${currentOperation}`;
        }

        function calculate() {
            if (previousInput === '' || currentInput === '') return;
            let result;
            let prev = parseFloat(previousInput);
            let current = parseFloat(currentInput);

            switch (currentOperation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        alert("Cannot divide by zero");
                        return;
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }

            currentInput = result.toString();
            currentOperation = '';
            previousInput = '';
            document.getElementById('display').value = currentInput;
        }

        function clearDisplay() {
            currentInput = '';
            previousInput = '';
            currentOperation = '';
            document.getElementById('display').value = '';
        }