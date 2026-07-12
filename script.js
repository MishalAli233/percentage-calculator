function calculatePercentage() {
  const obtained = parseFloat(document.getElementById("obtained").value);
  const total = parseFloat(document.getElementById("total").value);

  if (isNaN(obtained) || isNaN(total) || total <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter valid marks.";
    return;
  }

  const percentage = (obtained / total) * 100;

  document.getElementById("result").innerHTML =
    "Percentage: " + percentage.toFixed(2) + "%";
}
