document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputbox');
    const buttons = Array.from(document.querySelectorAll('button'));

    let expression = "";

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.innerHTML;

            if (value === '=') {
                try {
                    // Evaluate the expression safely
                    expression = eval(expression).toString();
                } catch {
                    // Handle any errors during evaluation
                    expression = "Error";
                }
                input.value = expression;
            } else if (value === 'AC') {
                expression = "";
                input.value = "";
            } else if (value === 'DEL') {
                expression = expression.slice(0, -1);
                input.value = expression;
            } else {
                // Prevent adding multiple operators consecutively
                if (/[+\-*/]/.test(expression.slice(-1)) && /[+\-*/]/.test(value)) {
                    return; // Skip adding the operator
                }
                expression += value;
                input.value = expression;
            }
        });
    });
});
