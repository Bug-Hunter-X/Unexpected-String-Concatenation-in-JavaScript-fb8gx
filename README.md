# Unexpected String Concatenation in JavaScript
This repository demonstrates a common JavaScript bug caused by the language's loose typing system.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition.  This can lead to unexpected results and logic errors.

## Bug
The `add` function is intended to add two numbers. However, due to type coercion, when a number and string are passed, the result is unexpected.

## Solution
The solution is to explicitly convert both arguments to numbers using `parseInt()` or `Number()` before performing the addition.