document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');
    const equals = document.getElementById('equals');
    const clear = document.getElementById('clear');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        });
    });

    equals.addEventListener('click', () => {
        try {
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = 'Error';
        }
    });

    clear.addEventListener('click', () => {
        display.innerText = '0';
    });
});