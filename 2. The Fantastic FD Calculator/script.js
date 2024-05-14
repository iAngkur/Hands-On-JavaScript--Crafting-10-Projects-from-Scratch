const principle_amount = document.getElementById('principle_amount');
const interest_rate = document.getElementById('interest_rate');
const years = document.getElementById('years');
const calculate_btn = document.getElementById('calculate');
const maturity_amount = document.getElementById('maturity_amount');

function calculateMaturityAmount(principleAmount, interestRate, tenureYears) {
    return principleAmount * (principleAmount * interestRate * tenureYears) / 100;
}

const showMaturityAmount = (maturityAmount) => {
    maturity_amount.textContent = maturityAmount.toFixed(2);
}

const calculate = (event) => {
    const principleAmount = parseFloat(principle_amount.value);
    const interestRate = parseFloat(interest_rate.value);
    const tenureYears = parseFloat(years.value);

    const maturityAmount = calculateMaturityAmount(principleAmount, interestRate, tenureYears);

    showMaturityAmount(maturityAmount);
}

calculate_btn.addEventListener('click', calculate);