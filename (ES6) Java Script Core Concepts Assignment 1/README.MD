# JavaScript (ES6) Core Concepts Assignment

## Overview

This repository contains my solutions for the JavaScript ES6 Core Concepts assignment. The focus is on hands-on coding experiments to deeply understand modern JavaScript features.

## Topics Covered

- `var`, `let`, and `const` behavior and scope
- Template literals for dynamic strings
- Arrow functions and their differences from regular functions
- Iterators and the `for..of` loop

## Project Structure

### Section 1: var vs let vs const

- Task 1.1: Scope exploration with different variable declarations
- Task 1.2: Redeclaration and reassignment tests with error handling
- Task 1.3: Loop behavior demonstration with delayed logs

### Section 2: Template Literals

- Task 2.1: Dynamic multi-line message generator function
- Task 2.2: Conditional template literal outputs based on pass/fail status

### Section 3: Arrow Functions

- Task 3.1: Comparing `this` in regular vs arrow functions
- Task 3.2: Implicit vs explicit returns in arrow functions on arrays
- Task 3.3: Callback functions rewritten with normal and arrow syntax

### Section 4: Iterators & for..of

- Task 4.1: Custom iterable object with manual iteration
- Task 4.2: Comparing outputs of `for`, `for..in`, and `for..of` loops
- Task 4.3: Real-world scenario iteration (e.g., queue or playlist)

### Final Challenge

- Mini JavaScript Analyzer built using iterators and arrow functions where appropriate
- Multi-line template literals for formatted output
- Reflection logs documenting unexpected behaviors found through runtime experiments

## How to Run

- Run the JavaScript file in any modern browser console or Node.js environment.
- Each task prints output to the console demonstrating behavior clearly.
- Feel free to edit variable values and re-run to observe different outcomes.

## Reflection Logs

Included at the end of the file, detailing surprising runtime behaviors discovered, especially around scope, asynchronous loop delays, and arrow function context.

## Run Notes

- Multiple runs with varied data to ensure unique outputs and thorough exploration.
- Errors from illegal redeclarations are caught and logged without stopping execution.
- Asynchronous loops use varying delays to illustrate scope differences clearly.
