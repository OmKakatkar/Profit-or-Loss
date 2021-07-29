const priceInitial = document.querySelector("#price-initial");
const quantity = document.querySelector("#quantity");
const priceToday = document.querySelector("#price-today");
const check = document.querySelector("#check");

check.addEventListener("click", () => {
  clickHandler(priceInitial.value, quantity.value, priceToday.value);
});

function clickHandler(initial, qty, final) {
  initial = parseFloat(initial);
  qty = parseFloat(qty);
  final = parseFloat(final);
  if (initial !== "" && qty !== "" && final !== "") {
    let costPrice = initial * qty;
    let sellPrice = final * qty;
    if (costPrice < sellPrice) {
      console.log(`Yay you just earned a profit of ${sellPrice - costPrice}`);
    } else if (costPrice > sellPrice) {
      console.log(`Aww you just lost ${costPrice - sellPrice} from this stock`);
    } else {
      console.log(`No profit no loss`);
    }
  } else {
    console.log("Please enter all details");
  }
}
