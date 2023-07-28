let url = "https://api.coinlore.net/api/tickers/";
let rep = fetch(url);

let cc = document.getElementById("cardcontainer");
rep
  .then((val) => {
    // console.log(val);
    return val.json();
  })
  .then((jobos) => {
    // console.log(jobos);
    let a = jobos.data;
    // console.log(a);
    let cardhtml = "";
    for (i in a) {
      // console.log(a[i]);

      cardhtml += ` <div  id="${a[i].id}" class="card">
          <div class="card-body">
            <div class="coinsymandname">
              <h5 class="card-text coinsymbol">${a[i].symbol}</h5>
              <h5 class="card-text coinname">${a[i].name}</h5>
            </div>
            <h5 class="card-text perci1h">
              Percentage Change in last 1hour: <span class="spanperci1h">${a[i].percent_change_1h} %</span>
            </h5>
            <h5 class="card-text perci24h">
              Percentage Change in last 24hour: <span>${a[i].percent_change_24h} %</span>
            </h5>
            <h5 class="card-text perci7d">
              Percentage Change in last 7 days: <span>${a[i].percent_change_7d} %</span>
            </h5>
            <h5 class="card-text coinrank"><span>Rank : </span>${a[i].rank}</h5>
            <h5 class="card-text coinprice">${a[i].price_usd}</h5>
          </div>
        </div>`;
      cc.innerHTML = cardhtml;

      // =====change background to red for negative percantange chace value (not working) ========
      // let per1 = JSON.stringify(a[i].percent_change_1h);
      // per1 = JSON.parse(per1);
      // if (per1 < 0) {
      //   console.log(per1);
      //   let col = document.getElementsByClassName("spanperci1h")[0];
      //   console.log(col);
      //   col.style.backgroundColor = "red";
      // }
    }
  });
