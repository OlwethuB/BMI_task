function calculate() {
  let bmi;
  let result = document.getElementById("result");
  let weight = parseInt(document.getElementById("weight").value);
  let height = parseInt(document.getElementById("height").value);

  // this is so the numbers of the weight scrolled to will show on the label...
  document.getElementById("weight-val").textContent = weight + "  kg";
  document.getElementById("height-val").textContent = height + "  cm";

  // BMI formula
  bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  result.textContent = bmi;

  // catogarizing the ranges
  if (bmi < 18.4) {
    category = "Underweight";
    result.style.color = "#0591e8";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Heathy/normal";
    result.style.color = "#62f507";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
    result.style.color = "#62f507";
  } else if (bmi >= 30 && bmi <= 39.9) {
    category = "Obese";
    result.style.color = "#f56e07";
  } else {
    category = "MORBIDLY OBESE!!!";
    result.style.color = "#f5071b";
  }

  document.getElementById("category").textContent = category;
}
