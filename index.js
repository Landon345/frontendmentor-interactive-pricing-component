// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing,
//  a 25% discount should be applied to all prices.

const dataObj = {
  "0v": "10K",
  "25v": "50K",
  "50v": "100K",
  "75v": "500K",
  "100v": "1M",
  "0pm": 8,
  "25pm": 12,
  "50pm": 16,
  "75pm": 24,
  "100pm": 36,
};
setBar(50);
setText(50, false);

document.getElementById("monthly").oninput = function (e) {
  let discount = document.getElementById("monthly").checked;
  let val = document.getElementById("rangeSlider").value;
  setText(val, discount);
};
document.getElementById("rangeSlider").oninput = function (e) {
  let discount = document.getElementById("monthly").checked;
  let val = e.target.value;
  setBar(val);
  setText(val, discount);
};

// Making slider work
function setBar(value) {
  const fill = document.querySelector(".js-fill");
  fill.style.width = `${value}%`;
}

function setText(value, discount) {
  const perMonth = document.querySelector(".per-month");
  const views = document.getElementById("number-views");
  views.innerHTML = dataObj[value + "v"] + " ";
  if (discount) {
    perMonth.innerHTML = "$" + dataObj[value + "pm"] * 0.75 + ".00 ";
  } else {
    perMonth.innerHTML = "$" + dataObj[value + "pm"] + ".00 ";
  }
}
