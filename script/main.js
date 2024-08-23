document.addEventListener('DOMContentLoaded', function () {
    const result = document.getElementById('result');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.textContent;

            if (value === 'C') {
                result.value = '';
            } else if (value === '=') {
                try {
                    result.value = eval(result.value);
                } catch {
                    result.value = 'Error';
                }
            } else {
                result.value += value;
            }
        });
    });
});
