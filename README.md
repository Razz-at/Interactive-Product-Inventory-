# Interactive Product Inventory & Analytics Dashboard

## Project Description

A beginner-friendly JavaScript console application that lets users add
products and prices, categorize items by price, and generate a simple
inventory analytics report. It demonstrates core JavaScript concepts
such as arrays of objects, conditionals, loops, functions, scope, and
array methods.

## Features

-   Add products and prices through user input.
-   Validate product names and prices.
-   Categorize products as **Budget**, **Standard**, or **Premium**.
-   Calculate the total inventory value.
-   Filter products priced under \$200.
-   Generate a formatted product report using `map()`.
-   Demonstrate `forEach()`, `filter()`, and other JavaScript
    fundamentals.
-   Calculate an example total after applying a discount and tax.

## Technologies Used

-   JavaScript
-   HTML (optional, for loading the script in a browser)
-   Node.js (if using the terminal-based version)

## How to Run

### In a browser

1.  Put the browser-compatible JavaScript in `browser.js`.
2.  Create an `index.html` file that loads it with
    `<script src="browser.js"></script>`.
3.  Open `index.html` in Chrome.
4.  Press `F12` and open the **Console** to view the report.

Alternatively, paste the browser-compatible JavaScript directly into the
Chrome DevTools Console.

### In Node.js

The browser's `prompt()` function is not built into Node.js. For the
terminal version, use Node.js's `readline` module and the adapted input
code. 1. Open a terminal in the project folder. 2. Run `node index.js`.

## Example Inventory

The initial inventory contains: - Laptop --- \$800 - Mouse --- \$25

If a Monitor priced at \$150 is added, the total inventory value becomes
**\$975**.

## JavaScript Concepts Demonstrated

  Concept                         Usage
  ------------------------------- -------------------------------------------
  Arrays of objects               Store product names and prices
  Input and validation            Read and validate user entries
  `if...else` and `switch`        Validate data and assign categories
  Loops and flow control          Process products and handle invalid input
  Functions and arrow functions   Calculate totals and format results
  `forEach()`                     Display each inventory item
  `filter()`                      Find items priced under \$200
  `map()`                         Create an uppercase formatted report

## Notes

This is an educational project for practicing JavaScript fundamentals.
The tax and discount rates are illustrative examples, not a real billing
or accounting system.
