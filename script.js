//your JS code here. If required.
function printMyName() {
    alert(arguments.callee.name);
  }
  
  printMyName(); // Output: printMyName
  