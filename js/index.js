const priceInitial = document.querySelector("#price-initial");
const quantity = document.querySelector("#quantity");
const priceToday = document.querySelector("#price-today");
const check = document.querySelector("#check");
const output = document.querySelector("#output");
const main = document.querySelector("#main");

const happyGif = document.querySelector("#happy");
const sadGif = document.querySelector("#sad");

check.addEventListener("click", () => {
  // @ts-ignore
  clickHandler(priceInitial.value, quantity.value, priceToday.value, output);
});

function clickHandler(initial, qty, final, op) {
  // Default behaviour of GiF and color
  happyGif.style.display = "none";
  sadGif.style.display = "none";
  main.style.backgroundColor = "rgb(245, 248, 70)";

  if (initial !== "" && qty !== "" && final !== "") {
    if (initial >= 0 && qty >= 0 && final >= 0) {
      initial = parseFloat(initial);
      qty = parseFloat(qty);
      final = parseFloat(final);
      let costPrice = initial * qty;
      let sellPrice = final * qty;
      if (costPrice < sellPrice) {
        let profit = sellPrice - costPrice;
        let profitPercent = ((profit / costPrice) * 100).toFixed(2);
        happyGif.style.display = "block";
        output.textContent = `Yay you just earned an absolute profit of ₹${profit} which is ${profitPercent}% of the initial price`;
        if (parseFloat(profitPercent) >= 50) {
          main.style.backgroundColor = "green";
        }
      } else if (costPrice > sellPrice) {
        let loss = costPrice - sellPrice;
        let lossPercent = ((loss / costPrice) * 100).toFixed(2);
        sadGif.style.display = "block";
        output.textContent = `Aww you just lost ₹${loss} which is ${lossPercent}% of the initial price`;
        if (parseFloat(lossPercent) >= 50) {
          main.style.backgroundColor = "red";
        }
      } else {
        console.log("No profit no loss");
        output.textContent = "No profit no loss";
      }
    } else {
      console.log("Positive Amount Only");
      output.textContent = "Positive Amount Only";
    }
  } else {
    console.log("Please enter all details");
    output.textContent = "Please enter all details";
  }
}
