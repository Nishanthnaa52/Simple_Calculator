let calculation = '';
      
function cap() {
  document.querySelector('.displayNumbers').innerHTML = calculation;
}

function result() {
  document.querySelector('.displayNumbers').innerHTML = eval(calculation);
}

function del() {
  calculation = calculation.slice(0,-1);
  document.querySelector('.displayNumbers').innerHTML = calculation;
}