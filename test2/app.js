function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const percentage = parseFloat(document.getElementById('percentage').value);

    if (isNaN(number1) || isNaN(percentage)) {
        alert('Пожалуйста, введите корректные значения.');
        return;
    }

    const result = number1 + (number1 * (percentage / 100));
    document.getElementById('result').textContent = `Результат: ${result}`;
}
