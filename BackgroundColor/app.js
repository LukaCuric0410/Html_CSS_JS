document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("colorButton");
  
    button.addEventListener("click", function() {
      toggleColor();
    });
  
    function toggleColor() {
      var body = document.body;
      body.classList.toggle("red-background");
    }
  });