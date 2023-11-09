function changeBackgroundColor() {
  var body = document.body;
  var colorToggle = document.getElementById("colorToggle");

  if (colorToggle.checked) {
    body.style.backgroundColor = "#2196F3"; 
  } else {
    body.style.backgroundColor = ""; 
  }
}