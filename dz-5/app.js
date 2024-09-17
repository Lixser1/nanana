function lightUp(color) {
    const message = document.getElementById('message');
    if (color === "red") {
        message.textContent = 'Стой';
        message.style.color = 'red';
    } else if (color === 'yellow') {
        message.textContent = 'Жди';
        message.style.color = 'yellow';
    } else if (color === 'green') {
        message.textContent = 'Иди';
        message.style.color = 'green';
    }
}