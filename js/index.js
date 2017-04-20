var expression = [];
var expressionString;
var result;

// When any calculator button is pressed:
$('.buttons').on('click', 'span:not(#equals)', function(event) {
  // Store number data in variable
  var $number = $(this);
  console.log($number.text());
  console.log(typeof($number.text()));
  // Display pressed number on screen
  $('#screen').append($number.text());
  // Add pressed number to expression array
  expression.push($number.text());
  console.log(expression);
  // Take number array and change to string
  expressionString = expression.join("");
  console.log(expressionString);
});

// When clear is pressed:
$('.buttons').on('click', '#clear', function() {
  // Reset screen
  $('#screen').text("");
  // Reset array
  expression = [];
  // Reset expressionString
  expressionString = "";
  console.log(expressionString);
});

// When equals is pressed:
$('.buttons').on('click', '#equals', function() {
  // Clear screen
  $('#screen').text("");
  // Evaluate current string
  console.log(expressionString);
  result = eval(expressionString);
  console.log(result);
  // Display the result on the screen
  $('#screen').append(result);
  // Reset array
  expression = [];
  // Reset expressionString
  expressionString = "";
  // console.log(expressionString); 
});
