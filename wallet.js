function depositeMoney(){
    var dip = parseInt(document.getElementById('diposite').value); // Getting the value from input field
    if (document.getElementById('diposite').value.trim() == '' || dip<0){  //This is to ensure that user can't send empty value or negative value
        alert('Please enter a valid in the input field.');
        return;
    }
    var currentAmount = parseInt(document.getElementById('current-wallet').innerText);

    var totalDiposite = parseInt(document.getElementById('totaldeposite').innerText);

    currentAmount += dip; //Adding current and new amount
    totalDiposite += dip; //Adding total and new amount

    document.getElementById('current-wallet').innerText = currentAmount;
    document.getElementById('totaldeposite').innerText = totalDiposite;
    document.getElementById('diposite').value = ''; //Clearing the input field
}

function withdrawMoney(){
    var wit = parseInt(document.getElementById('withdraw').value); // Getting the value from input field

    if (document.getElementById('withdraw').value.trim() == '' || wit<0){  //This is to ensure that user can't send empty value or negative value
        alert('Please enter a valid in the input field.');
        return;
    }

    var currentAmount = parseInt(document.getElementById('current-wallet').innerText);

    var totalWithdraw = parseInt(document.getElementById('totalwithdraw').innerText);
    if(wit > currentAmount){
            alert('You have not enough money in your Wallet.')
            document.getElementById('withdraw').value = '';
        }
    else{
        currentAmount -= wit; //Substracting new amount from previous amount
        totalWithdraw += wit; //Adding previous and new withdraw amount
        document.getElementById('withdraw').value = ''; //Clearing the input field
        }
    
    document.getElementById('current-wallet').innerText = currentAmount;
    document.getElementById('totalwithdraw').innerText = totalWithdraw;

}

function login(){
    window.location.href = 'login.html';
}
function index(){
    window.location.href = 'https://github.com/shariarfam';
}
