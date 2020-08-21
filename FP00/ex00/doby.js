console.log(functionDeclarationSum(1, 2));

console.log(functionExpressionSum);
console.log(functionExpressionSum(1, 2));

function functionDeclarationSum(a, b) {
  return a + b;
}

var functionExpressionSum = function (a, b) {
  return a + b;
};
