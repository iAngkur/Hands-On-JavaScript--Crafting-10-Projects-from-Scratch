function calculateTip() {
    const bill_amount = parseFloat(document.getElementById('bill_amount').value);
    const tip_percentange = parseFloat(document.getElementById('tip_percentage').value);

    if (!bill_amount || !tip_percentange) {
        alert('Enter Bill Amount and Tip Percentange');
        document.getElementById('bill_amount').focus();
        return;
    }

    const tip_amount = bill_amount * (tip_percentange / 100.00);
    const total_amount = bill_amount + tip_amount;

    document.getElementById('tip_amount').textContent = `Tip Amount: $${tip_amount.toFixed(2)}`;
    document.getElementById('total_amount').textContent = `Total Amount: $${total_amount.toFixed(2)}`;

}