let calculation = '';
      
      function cap() {
        document.querySelector('.displayNumbers').innerHTML = calculation;
      }

      function result() {
        document.querySelector('.displayNumbers').innerHTML = eval(calculation);
      }