// Function to define the calculate() on the button
function calculate() {
  // Variables for the boxes and a default value
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var num3 = 1.72;
  // If the num1 box is not empty and has a value then simply multiply both num1 and num2
  if (document.getElementById("num1").value != 0) {
    document.getElementById("total").innerText = num1 * num2;
  }
  // if the num1 box is empty then multiply the default value num3 with num2
  if (document.getElementById("num1").value == 0) {
    document.getElementById("total").innerText = num3 * num2;
  }
  // if both boxes are empty then ask the user to insert a value
  if (
    document.getElementById("num1").value == 0 &&
    document.getElementById("num2").value == 0
  ) {
    document.getElementById("total").innerText = "Please Enter a Value";
  }
}
