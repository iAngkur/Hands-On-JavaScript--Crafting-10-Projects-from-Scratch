const add_expense_btn_element = document.querySelector('#add_expense_btn');
const expense_list_element = document.querySelector('.expense_list');
const total_expense_element = document.querySelector('.total_expense > h3');

let expenses = [];
let total = 0;

function renderExpenses() {
    let html = '';
    expenses.forEach(expense => {
        html += `
            <div class="expense_item">
                <div class="expense_item_description">${expense.description}</div>
                <div class="expense_item_amount">${expense.amount}</div>
                <button class="expense_item_remove">
                    &times;
                </button>
            </div>
        `;
    });

    expense_list_element.innerHTML = html;
    total_expense_element.innerText = `Total Expenses: $${total.toFixed(2)}`;
}
function addExpenses() {
    const description = prompt("Enter Expense Description: ");
    const amount = parseFloat(prompt('Enter Expense Amount: '));

    if (description && amount) {
        const expense = {
            description,
            amount
        };
        expenses.push(expense);
        total += amount;
        renderExpenses();
    }
}

function deleteExpenses(index) {
    total -= expenses[index].amount;
    expenses.splice(index, 1);
    renderExpenses();
}

add_expense_btn_element.addEventListener('click', addExpenses);

expense_list_element.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('expense_item_remove')) {
        const index = Array.from(event.target.parentNode.parentNode.children)
            .indexOf(event.target.parentNode);
        deleteExpenses(index);
    }
});