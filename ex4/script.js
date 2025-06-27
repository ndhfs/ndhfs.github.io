function getNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  return { num1, num2 };
}

function displayResult(value) {
  document.getElementById("result").textContent = "Результат: " + value;
}

function add() {
  const { num1, num2 } = getNumbers();
  displayResult(num1 + num2);
}

function subtract() {
  const { num1, num2 } = getNumbers();
  displayResult(num1 - num2);
}

function multiply() {
  const { num1, num2 } = getNumbers();
  displayResult(num1 * num2);
}

function divide() {
  const { num1, num2 } = getNumbers();
  if (num2 === 0) {
    displayResult("Ошибка: деление на ноль");
  } else {
    displayResult(num1 / num2);
  }
}
