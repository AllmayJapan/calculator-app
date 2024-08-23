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
                    // eval()を使用して計算を実行
                    result.value = eval(result.value);
                } catch (error) {
                    // 計算エラーが発生した場合の処理
                    result.value = 'Error';
                }
            } else {
                result.value += value;
            }
        });
    });
});
