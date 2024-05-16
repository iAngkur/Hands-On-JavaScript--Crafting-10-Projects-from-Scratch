const principle = document.getElementById('principle');
const interest_rate = document.getElementById('interestRate');
const tenure = document.getElementById('tenure');
const calculate = document.getElementById('calculate');
const display_result = document.getElementById('result');

function isInvalid(amount) {
    return Number.isNaN(amount) || amount === '' || amount === null;
}

function getMaturitryAmount(principleAmount, interestRate, tenureYears) {
    return principleAmount + (principleAmount * interestRate * tenureYears) / 100.00;
}

function showResult(result) {
    display_result.innerText = `Maturity Amount: ${result.toFixed(2)}`;
}

function calculateMaturityAmount() {
    // Get input values from the form elements
    const principleAmount = parseFloat(principle.value);
    const interestRate = parseFloat(interest_rate.value);
    const tenureYears = parseFloat(tenure.value);

    if (isInvalid(principleAmount) || isInvalid(interestRate) || isInvalid(tenureYears)) {
        alert('Invalid Input');
        principle.focus();
    } else {
        const maturityAmount = getMaturitryAmount(principleAmount, interestRate, tenureYears);
        showResult(maturityAmount);
    }
}

principle.focus();
calculate.addEventListener('click', calculateMaturityAmount);
