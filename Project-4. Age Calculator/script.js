const dob_input = document.getElementById('dob');
const calculate_btn = document.getElementById('calculate-btn');
const result = document.getElementById('result');

calculate_btn.addEventListener('click', () => {

    if (!dob_input.value) {
        alert('Select DOB');
    }

    const dob = new Date(dob_input.value);
    const ageInMins = Date.now() - dob.getTime();
    const ageDate = new Date(ageInMins);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    result.textContent = age;
});