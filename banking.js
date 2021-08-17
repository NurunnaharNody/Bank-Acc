// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposited 
  const depositInput = document.getElementById('deposit-input');

  const newDepositText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositText);
//   console.log(depositAmount);


// update deposit total 
  const depositTotal = document.getElementById('deposit-total');

  const previusDepositText = depositTotal.innerText;
  const previusDepositAmount = parseFloat(previusDepositText);
  const newDepositTotal = previusDepositAmount + newDepositAmount;
  depositTotal.innerText = newDepositTotal;



//  update account balance 

const balanceTotal = document.getElementById('balance-total');

  const previusBalanceText = balanceTotal.innerText;
  const previusBalanceAmount = parseFloat(previusBalanceText);
  const newBalanceTotal = previusBalanceAmount + newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;

//  clear deposit input field 
  depositInput.value= '';
});

// ---------------------------------------------handle withdraw event handler 

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);


    // set withdraw total amount 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previusWithdrawText = withdrawTotal.innerText;
    const previusWithdrawTotal = parseFloat(previusWithdrawText);

    const newWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance 

    const balanceTotal = document.getElementById('balance-total');
    const previusBalanceText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(previusBalanceText);
    const newBalanceTotal = previusBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input 
    withdrawInput.value = '';
});

