setInterval(() => {
  fetch('https://coin-cart.firebaseio.com/storefronts/-L2bvPJ3pD3MvrWw9Oqc/stats.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    const PRESOLD  = 20487285;
    const QUANTITY = 28000000;
    
    data.claimedQuantity  += PRESOLD; 
    data.availableQuantity = QUANTITY - data.claimedQuantity;    
    data.claimedQuantityPercent = Math.round((data.claimedQuantity / QUANTITY) * 100); 

    let elementSold = document.getElementById('sold');
    if (data.claimedQuantity < 28000000) {
      elementSold.innerText = NUMBER.Display(data.claimedQuantity);
    } else {
      elementSold.innerText = NUMBER.Display('28,000,000');
    }      

    let elementRemaining = document.getElementById('remaining');
    if (data.availableQuantity > 0) {
      elementRemaining.innerText = NUMBER.Display(data.availableQuantity);
    } else {
      elementRemaining.innerText = NUMBER.Display('0');
    }     

    let elementBar = document.getElementById('myBar');
    if (data.claimedQuantityPercent < 100) {
      elementBar.style.width = data.claimedQuantityPercent + '%';
      elementBar.innerText = data.claimedQuantityPercent + '%';
    } else {
      elementBar.style.width = '100%';
      elementBar.innerText = '100%';
    }      
    
  });
}, 1000);


// (Reserved+Claimed)/70,000,000