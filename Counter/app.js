document.addEventListener("DOMContentLoaded", function() {
    var counterValue = 0;
    var counterElement = document.getElementById("counter");
    var increaseButton = document.getElementById("increase");
    var decreaseButton = document.getElementById("decrease");
    var resetButton = document.getElementById("reset");
  
    increaseButton.addEventListener("click", function() {
      counterValue++;
      updateCounter();
    });
    decreaseButton.addEventListener("click", function() {
        counterValue--;
        updateCounter();
      });
      resetButton.addEventListener("click", function(){
      counterElement.innerText = 0
    });
      function updateCounter() {
        counterElement.innerText = counterValue;
      }
    });