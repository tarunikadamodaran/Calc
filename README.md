# Ex.08 Design of a Standard Calculator
## Date:

## AIM:
To design a web application for a standard calculator with minimum five operations.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for creating attractive colors.

### Step 4:
Write JavaScript program for implementing five different operations.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
<html>

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Advanced Calculator</title>
   <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
   <h2 align="center" style="color: #FF6B6B;">Tarunika.D(212223040227) STANDARD CALCULATOR</h2>

   <div class="calculator">

      <form>
         <div class="display">
            <input type="text" id="result" placeholder="Enter Value..." readonly="" style="color: #00ff95;">
         </div>
         <input type="button" value="AC" onclick="ClearFuntion()" class="clear">
         <input type="button" value="DEL" onclick="deleteFuntion()" class="delete">
         <input type="button" value="%" onclick="display('%')" class="operator">
         <input type="button" value="/" onclick="display('/')" class="operator">
         <br>
         <input type="button" value="7" onclick="display('7')" class="number">
         <input type="button" value="8" onclick="display('8')" class="number">
         <input type="button" value="9" onclick="display('9')" class="number">
         <input type="button" value="*" onclick="display('*')" class="operator">
         <br>
         <input type="button" value="4" onclick="display('4')" class="number">
         <input type="button" value="5" onclick="display('5')" class="number">
         <input type="button" value="6" onclick="display('6')" class="number">
         <input type="button" value="-" onclick="display('-')" class="operator">
         <br>
         <input type="button" value="1" onclick="display('1')" class="number">
         <input type="button" value="2" onclick="display('2')" class="number">
         <input type="button" value="3" onclick="display('3')" class="number">
         <input type="button" value="+" onclick="display('+')" class="operator">
         <br>
         <input type="button" value="0" onclick="display('0')" class="number">
         <input type="button" value="." onclick="display('.')" class="number">
         <input type="button" value="√" onclick="squareRoot()" class="operator">
         <input type="button" value="=" onclick="SolveCalculation()" class="equal">
      </form>
   </div>

   <script src="script.js"></script>
</body>

</html>
```
```
body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
 }
 
 .calculator {
    background: #333;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    height: auto;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
 }
 
 form {
    margin: 0;
    padding: 0;
 }
 
 .display input {
    text-align: right;
    width: 100%;
    height: 60px;
    font-size: 24px;
    color: #00ff95;
    background: #444;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
 }
 
 input[type="button"] {
    width: 60px;
    height: 60px;
    font-size: 20px;
    color: #fff;
    background: #555;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    transition: background 0.3s;
 }
 
 input[type="button"]:hover {
    background: #777;
 }
 
 .clear {
    background: #FF6B6B;
 }
 
 .delete {
    background: #FFB266;
 }
 
 .operator {
    background: #66CCCC;
 }
 
 .number {
    background: #666;
 }
 
 .equal {
    width: 130px;
    background: #4CAF50;
 }
 ```
 ```
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
```
## OUTPUT 
![alt text](<Screenshot 2024-05-09 140705-2.png>)
![alt text](<Screenshot 2024-05-09 140720.png>)
## RESULT:
The program for designing a standard calculator using HTML and CSS is executed successfully.
