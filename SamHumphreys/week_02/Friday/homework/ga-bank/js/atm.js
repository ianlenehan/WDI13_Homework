var accDetails = {
  chkBalance: 50,
  svsBalance: 100,
  chkAmount: 0,
  svsAmount: 0,
  errorMsg: ''
};

var doStuff = {
  update: function () {
    $('#checking-balance').html('$ ' + accDetails.chkBalance);
    $('#savings-balance').html('$ ' + accDetails.svsBalance);
    doStuff.validateBalance();
    doStuff.updateVariables();
    $('#savings-amount').val('');
    $('#checking-amount').val('');
  },
  validateBalance: function () {
    if (accDetails.chkBalance === 0) {
      $('#checking').css({backgroundColor: '#FF0000'});
    } else {
      $('#checking').css({backgroundColor: '#888888'});
    }
    if (accDetails.svsBalance === 0) {
      $('#savings').css({backgroundColor: '#FF0000'});
    } else {
      $('#savings').css({backgroundColor: '#888888'});
    }
  },
  updateVariables: function () {
    accDetails.chkAmount = parseInt($('#checking-amount').val());
    accDetails.svsAmount = parseInt($('#savings-amount').val());
  },
  chkDeposit: function () {
    doStuff.updateVariables();
    if (isNaN(accDetails.chkAmount) || typeof accDetails.chkAmount !== 'number'){
      accDetails.errorMsg = 'not a number';
      errorMessages.error();
      doStuff.update();
      return;
    }
    accDetails.chkBalance += accDetails.chkAmount;
    doStuff.update();
  },
  svsDeposit: function () {
    doStuff.updateVariables();
    if (isNaN(accDetails.svsAmount) || typeof accDetails.svsAmount !== 'number'){
      accDetails.errorMsg = 'not a number';
      errorMessages.error();
      doStuff.update();
      return;
    }
    accDetails.svsBalance += accDetails.svsAmount;
    doStuff.update();
  },
  chkWithdrawal: function () {
    doStuff.updateVariables();
    if (isNaN(accDetails.chkAmount) || typeof accDetails.chkAmount !== 'number'){
      accDetails.errorMsg = 'not a number';
      errorMessages.error();
      doStuff.update();
      return;
    }
    if (accDetails.chkBalance >= accDetails.chkAmount) {
      accDetails.chkBalance -= accDetails.chkAmount;
      doStuff.update();
      return;
    }
    if (accDetails.chkAmount > accDetails.chkBalance + accDetails.svsBalance) {
      accDetails.errorMsg = 'insufficent balance for that withdrawal';
      errorMessages.error();
      doStuff.update();
      return;
    }
    if (accDetails.chkAmount <= accDetails.chkBalance + accDetails.svsBalance) {
      accDetails.svsAmount = accDetails.chkAmount - accDetails.chkBalance;
      accDetails.chkBalance = 0;
      accDetails.svsBalance -= accDetails.svsAmount;
      doStuff.update();
      return;
    }
  },
  svsWithdrawal: function () {
    doStuff.updateVariables();
    if (isNaN(accDetails.svsAmount) || typeof accDetails.svsAmount !== 'number'){
      accDetails.errorMsg = 'not a number';
      errorMessages.error();
      doStuff.update();
      return;
    }
    if (accDetails.svsBalance >= accDetails.svsAmount){
      accDetails.svsBalance -= accDetails.svsAmount;
      doStuff.update();
      return;
    }
    if (accDetails.svsAmount > accDetails.chkBalance + accDetails.svsBalance) {
      accDetails.errorMsg = 'insufficent balance for that withdrawal';
      errorMessages.error();
      doStuff.update();
      return;
    }
    if (accDetails.svsAmount <= accDetails.chkBalance + accDetails.svsBalance) {
      accDetails.chkAmount = accDetails.svsAmount - accDetails.svsBalance;
      accDetails.svsBalance = 0;
      accDetails.chkBalance -= accDetails.chkAmount;
      doStuff.update();
      return;
    }
  }
};

var errorMessages = {
  error: function () {
    var $errorMessage = $('<div>').attr('id', 'error').html('<p>INVALID INPUT - ' + accDetails.errorMsg + '</p>');
    $errorMessage.css({'background-color': '#FF0000',
                        'width': '700px',
                        'margin': '0 auto',
                        'text-align': 'center'});
    $('body').append($errorMessage);
    window.setTimeout(errorMessages.clearError, 3000);
  },
  clearError: function () {
    $('#error').remove();
  }
};

doStuff.update();
$('#checking-deposit').on('click', doStuff.chkDeposit);
$('#savings-deposit').on('click', doStuff.svsDeposit);
$('#checking-withdraw').on('click', doStuff.chkWithdrawal);
$('#savings-withdraw').on('click', doStuff.svsWithdrawal);
