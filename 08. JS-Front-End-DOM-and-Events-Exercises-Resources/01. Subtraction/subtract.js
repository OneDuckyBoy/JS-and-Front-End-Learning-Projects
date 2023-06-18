function subtract() {
    let firstNum = parseFloat(document.getElementById('firstNumber').value);
    let secondNum = parseFloat(document.getElementById('secondNumber').value);
    document.getElementById('result').textContent = firstNum-secondNum;
}