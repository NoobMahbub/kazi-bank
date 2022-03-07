


document.getElementById('deposit-button').addEventListener('click',function () {
   
    const prevDeposit =parseFloat(document.getElementById('total-deposit').innerText);
   
    const newDeposit =parseFloat( document.getElementById('deposit-input').value);
    if (newDeposit>0) {
        
    
   const totalDeposit =  newDeposit + prevDeposit;
   
    document.getElementById('total-deposit').innerText = totalDeposit;

    const prevBalance = parseFloat(document.getElementById('balance-total').innerText);
    console.log(prevBalance);
    const totalBalance = prevBalance + newDeposit;
        
    document.getElementById('balance-total').innerText = totalBalance;

    document.getElementById('deposit-input').value = '';
    
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Deposit amount should be positive!',
           
          })
    }
});

document.getElementById('withdraw-button').addEventListener('click',function () {
  
    const prevWithdraw =parseFloat(document.getElementById('total-withdraw').innerText);
   
    const newWithdraw =parseFloat( document.getElementById('withdraw-input').value);
    
    const prevBalance = parseFloat(document.getElementById('balance-total').innerText);
    if(newWithdraw>prevBalance){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Withdraw amount can't be more then main balance!",
           
          })
    }
     else if (newWithdraw>0) {
   const totalWithdraw =  newWithdraw + prevWithdraw;
   
    document.getElementById('total-withdraw').innerText = totalWithdraw;

  
    const totalBalance = prevBalance - newWithdraw;
        
    document.getElementById('balance-total').innerText = totalBalance;

    document.getElementById('withdraw-input').value ='';
    }

    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Withdraw amount should be positive!',
           
          })
    }
    
    
});
