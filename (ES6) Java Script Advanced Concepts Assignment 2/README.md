# JavaScript Advanced Practice Project

## Overview

This project is a comprehensive set of JavaScript exercises designed to deepen understanding of modern JavaScript concepts including array methods, closures, hoisting, call stack behavior, destructuring, rest & spread operators, and practical data processing.

The project is divided into **three main sections** with multiple tasks in each, culminating in a **final data-processing application** that demonstrates the combined use of these concepts.

---

## Section 1: Array Advanced Methods (Deep Practice)

### Task 1.1 – map vs forEach vs reduce (Behavior Study)

- Implemented the same data transformation using `map`, `forEach`, and `reduce`.
- Logged intermediate steps in each method to observe the flow of data.
- Demonstrated how `map` returns a new array, `forEach` performs operations without returning, and `reduce` aggregates values into a single result.

### Task 1.2 – filter + reduce Combination

- Built a program that filters an array of numbers/objects based on a condition and aggregates results using `reduce`.
- Changed the filter condition twice and re-ran the program to demonstrate how outputs vary dynamically.

### Task 1.3 – Custom Array Method Simulation

- Simulated a custom version of `map` using a normal `for` loop.
- The custom function accepted a callback and logged its execution.
- Compared the output with the real `map` method to verify correctness.

---

## Section 2: JavaScript Behind the Scenes

### Task 2.1 – Hoisting Reality Check

- Explored JavaScript hoisting by using variables and functions before declaration.
- Mixed `var`, `let`, `const`, and function declarations.
- Wrapped risky code in `try/catch` blocks to log what runs, what fails, and in which order.

### Task 2.2 – Call Stack Observation

- Created multiple nested functions with entry and exit logs.
- Added an asynchronous operation using `setTimeout`.
- Observed synchronous execution of nested functions vs delayed execution of async operations, demonstrating the call stack and event loop behavior.

### Task 2.3 – Closure Proof

- Created a function that returns another function and accesses variables from the outer scope.
- Observed the behavior when outer variables are changed after the closure is created.
- Demonstrated how closures “remember” the variables from their creation scope.

---

## Section 3: Destructuring, Rest & Spread Operators

### Task 3.1 – Destructuring with Defaults

- Created objects and destructured their properties with default values.
- Intentionally omitted some properties to observe how default values are applied.

### Task 3.2 – Rest Operator in Functions

- Wrote functions that accept an unknown number of arguments using the rest operator.
- Processed arguments meaningfully (e.g., sum of numbers).
- Demonstrated the function’s behavior with varying numbers of arguments, including large random datasets.

### Task 3.3 – Spread Operator & References

- Demonstrated the difference between shallow copying objects using the spread operator and direct reference assignment.
- Modified nested values to observe how changes affect the original object in each case.

---

## Final Project: JavaScript Data Processor App

- Built a data-processing app that accepts a dataset (array of objects).
- Combined `map`, `filter`, and `reduce` for data transformation and aggregation.
- Applied destructuring and spread operators to enhance object manipulation.
- Included a closure to evaluate student grades dynamically.
- Logged execution flow clearly for every step.
- Documented surprising behaviors observed during execution as **Experiment Logs**.

---

## Experiment Logs (Examples from Execution)

1. **Map + Spread**: Modifying the returned array did not affect the original dataset.
2. **Reduce for Average Calculation**: Using the array length during reduction automatically computed the average without an extra step.
3. **Closure Behavior**: The inner function retained access to the outer variable’s value even after the outer function execution finished.

---

## Conclusion

This project demonstrates a thorough understanding of JavaScript core concepts, advanced array methods, closures, hoisting, call stack behavior, and object manipulation techniques.  
All tasks were executed with clear console logs to illustrate the flow of data and the effects of transformations.

---
