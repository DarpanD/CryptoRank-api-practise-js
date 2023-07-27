let url = "https://api.coinlore.net/api/tickers/";
let rep = fetch(url);

let cc = document.getElementById("cardcontainer");
rep
  .then((val) => {
    console.log(val);
    return val.json();
  })
  .then((jobos) => {
    console.log(jobos);
    let cardhtml = "";
    for (i in jobos.data) {
      console.log(jobos.data[i]);
      //   cardhtml += `<div id="${jobos.data[i].price_btc} " class="card">
      //       <div class="card-body">
      //         <h5 class="card-text coinsymbol">${jobos.data[i].symbol}</h5>
      //         <h5 class="card-text coinrank">
      //           <span>Rank  : </span>${jobos.data[i].rank}
      //         </h5>
      //         <h5 class="card-text coinname">${jobos.data[i].name}</h5>
      //         <h5 class="card-text coinprice">${jobos.data[i].price_usd} $</h5>
      //       </div>
      //     </div>`;
    }
    // cc.innerHTML = cardhtml;
  });
