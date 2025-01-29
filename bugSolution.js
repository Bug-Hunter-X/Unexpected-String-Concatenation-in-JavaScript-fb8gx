function add(a, b) {
  // Explicitly convert to numbers to prevent string concatenation
  a = Number(a);
  b = Number(b);
  return a + b; 
}

console.log(add(1, '2')); // Output: 3
console.log(add(1, 2)); //Output: 3