function display(val) {
   document.getElementById('result').value += val;
}

function SolveCalculation() {
   var x = document.getElementById('result').value;
   var y = eval(x);
   document.getElementById('result').value = y;
}

function ClearFuntion() {
   document.getElementById('result').value = ''
}

function deleteFuntion() {
   var temp = ''
   temp = document.getElementById('result').value;
   var len = temp.length;
   temp = temp.substring(0, len - 1)
   document.getElementById('result').value = temp;
}

function squareRoot() {
   var x = document.getElementById('result').value;
   var result = Math.pow(x, 0.5)
   document.getElementById('result').value = result
}
