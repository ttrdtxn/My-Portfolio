// Wallet system for buyer
let walletBalance = 0;
let transactionHistory = [];

// Function to update wallet display
function updateWalletDisplay() {
    document.getElementById('walletBalance').textContent = `$${walletBalance.toFixed(2)}`;
}

// Function to open top-up modal
function openTopUpModal() {
    document.getElementById('topUpModal').style.display = 'block';
}

// Function to close top-up modal
function closeTopUpModal() {
    document.getElementById('topUpModal').style.display = 'none';
}

// Function to add money to wallet
function topUpWallet() {
    const cardNumber = document.getElementById('cardNumber').value;
    const amount = parseFloat(document.getElementById('topUpAmount').value);
    
    if (cardNumber && amount > 0) {
        walletBalance += amount;
        transactionHistory.push({ type: 'Top-Up', amount, date: new Date().toLocaleString() });
        updateWalletDisplay();
        showToast(`Wallet topped up: $${amount.toFixed(2)}`, 'success');
        closeTopUpModal();
    } else {
        showToast('Invalid card number or amount. Please enter valid details.', 'error');
    }
}

// Function to update transaction history display (if needed)
function updateTransactionHistory() {
    const transactionHistoryDisplay = document.getElementById('transactionHistory');
    transactionHistoryDisplay.innerHTML = transactionHistory.map(transaction => `
        <div>
            <strong>${transaction.type}</strong> - $${transaction.amount.toFixed(2)}
            <p>${transaction.date}</p>
        </div>
    `).join('');
}