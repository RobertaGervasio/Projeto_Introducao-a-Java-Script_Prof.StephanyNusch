var currentNumberWarapper = document.getElementById('currentNumber');
var currentNumber =0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWarapper.innerHTML = currentNumber;
    colorChange();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWarapper.innerHTML = currentNumber;
    colorChange();
}

function colorChange() {

    var elemento =  document.getElementById('currentNumber');
 
     if (currentNumber < 0) {
         
         elemento.classList.remove("black");
         elemento.classList.add("red");
     }

     else if(currentNumber > 0) {
        elemento.classList.remove("red");
        elemento.classList.add("black");
    }
}