const loginBtn = document.querySelector('#login-btn');
const loginArea = document.querySelector('#login-area');
const nameInput = document.querySelector('#name');
const passInput = document.querySelector('#password');
const transactionArea = document.querySelector('#transaction-area');

//form validation and display dynamically
loginBtn.addEventListener('click', () => {
    if (nameInput.value === '' || passInput.value === '') {
        alert('Please fill all the field');
    }
    else {
        loginArea.style.display = 'none';
        transactionArea.style.display = 'block';
    }
});

//transaction calculation
const addDeposit = document.querySelector('#add-deposit');
const addWithdraw = document.querySelector('#add-withdraw');

addDeposit.addEventListener('click', () => {
    let depositAmount = document.querySelector('#deposit-amount');
    let depositAmountNum = parseFloat(depositAmount.value);

    updateBalance('total-deposit', depositAmountNum);
    updateBalance('balance', depositAmountNum);

    document.querySelector('#deposit-amount').value = '';
});

addWithdraw.addEventListener('click', () => {
    let withdrawAmount = document.getElementById('withdraw-amount');
    let withdrawAmountNum = parseFloat(withdrawAmount.value);

    updateBalance('total-withdraw', withdrawAmountNum);
    updateBalance('balance', -withdrawAmountNum);

    document.getElementById('withdraw-amount').value = '';
})

const updateBalance = (id, current) => {
    let total = document.getElementById(id);
    let totalNum = parseFloat(total.innerText);
    totalNum += current;
    document.getElementById(id).innerText = totalNum;
}