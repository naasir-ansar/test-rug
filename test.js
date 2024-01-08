
console.log("HW!!");
// udpate few comments
// Example of a hypothetical unsafe jQuery plugin (DO NOT USE)
$.fn.unsafePlugin = function(userInput) {
  // Unsafe usage of user input without proper validation
  this.html("<h1>" + userInput + "</h1>");
};

// Usage of the unsafe plugin
$("#targetElement").unsafePlugin("<script>alert('Vulnerable!')</script>");
