function logRevenue() {
  var views = +document.getElementById("value").value;
  
  var revenue = (views * 0.018);
  var fixed = revenue.toFixed(3);
  
  console.log("$" + fixed);
}

function displayRevenue() {
  var views = +document.getElementById("value").value;
  
  var revenue = (views * 0.018);
  var fixed = new Intl.NumberFormat().format(Math.trunc(revenue));
  
  document.getElementById("revenue").innerHTML = "$" + fixed;
}

function displayCreator(a, b) {
  var creator = a;
  var id = b;
  var date = new Date();
  var year = date.getFullYear();
  
  document.getElementById(id).innerHTML = creator + " @ " + year;
  
  // if it's the year 2025 and above
  if (year > 2024) {
    document.getElementById("creator").innerHTML = "Louie Kurenai @ 2023 - " + year;
  }
}

window.onload = function() {
  setInterval(() => {
    displayCreator("Louie Kurenai", "creator");
  });
}