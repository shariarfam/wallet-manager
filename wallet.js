function depositeMoney(){
    var dip = parseInt(document.getElementById('diposite').value);

    var currentAmount = parseInt(document.getElementById('current-wallet').innerText);

    var totalDiposite = parseInt(document.getElementById('totaldeposite').innerText);

    currentAmount += dip;
    totalDiposite += dip;

    document.getElementById('current-wallet').innerText = currentAmount;
    document.getElementById('totaldeposite').innerText = totalDiposite;
    document.getElementById('diposite').value = '';
}

function withdrawMoney(){
    var wit = parseInt(document.getElementById('withdraw').value);

    var currentAmount = parseInt(document.getElementById('current-wallet').innerText);

    var totalWithdraw = parseInt(document.getElementById('totalwithdraw').innerText);
    if(wit > currentAmount){
            alert('You have not enough money in your Wallet.')
            document.getElementById('withdraw').value = '';
        }
    else{
        currentAmount -= wit;
        totalWithdraw += wit;
        document.getElementById('withdraw').value = '';
        }
    
    document.getElementById('current-wallet').innerText = currentAmount;
    document.getElementById('totalwithdraw').innerText = totalWithdraw;

}

function login(){
    window.location.href = 'login.html';
}
function index(){
    window.location.href = 'index.html';
}