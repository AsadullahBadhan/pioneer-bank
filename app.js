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
let depositBalance = document.querySelector('#deposit-balance').innerText;
let withdraeBalance = document.querySelector('#withdraw-balance').innerText;
let mainBalance = document.querySelector('#main-balance').innerText;
let depositAmount = document.querySelector('#deposit-amount').value;
let withdrawAmount = document.querySelector('#withdraw-amount').value;
const addDeposit = document.querySelector('#add-deposit');
const addWithdraw = document.querySelector('#add-withdraw');
