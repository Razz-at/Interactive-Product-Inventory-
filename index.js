
console.log("--- Initializing Inventory System ---");

// 1. Data & Input Initialization
// const inventory = [
//     { name: "Laptop", price: 800 },
//     { name: "Mouse", price: 25 }
// ];

// Take input from the user
let productName = prompt("Enter product name (or Cancel to stop):");

while (productName !== null) {

    productName = productName.trim();

    // Validate product name
    if (productName === "") {
        console.log("Product name cannot be empty.");
        productName = prompt("Enter product name:");
        continue;
    }

    let priceInput = prompt("Enter product price:");

    // Handle cancellation
    if (priceInput === null) {
        break;
    }

    let price = Number(priceInput);

    // Validate price using if...else
    if (priceInput.trim() === "" ||
        !Number.isFinite(price) ||
        price <= 0) {
        console.log("Invalid price. Enter a positive number.");
        productName = prompt("Enter product name again:");
        continue;
    } else {
        inventory.push({
            name: productName,
            price: price
        });

        console.log(
            `Product "${productName}" added successfully.`
        );
    }

    // Ask whether the user wants to add another product
    productName = prompt(
        "Enter another product name (or Cancel to finish):"
    );
}

// 2. Control Flow & Category Evaluation
function getCategory(price) {
    switch (true) {
        case price >= 500:
            return "Premium";

        case price >= 100:
            return "Standard";

        default:
            return "Budget";
    }
}

// 3. Functions, Scope, Tax and Discount
function calculateFinalPrice(price, taxRate, discountRate) {
    const discount = price * discountRate;
    const discountedPrice = price - discount;
    const tax = discountedPrice * taxRate;

    return discountedPrice + tax;
}

// 4. Processing Inventory Using forEach()
console.log("\n--- Processing Inventory Roster ---");

inventory.forEach((item) => {
    const category = getCategory(item.price);

    console.log(
        `Item: ${item.name} ($${item.price}) -> Category: ${category}`
    );
});

// 5. Calculate Total Inventory Value
function calculateTotal(items) {
    let total = 0;

    for (const item of items) {
        if (!Number.isFinite(item.price)) {
            continue;
        }

        total += item.price;
    }

    return total;
}

const totalValue = calculateTotal(inventory);

// 6. Filter Affordable Items
const affordableItems = inventory.filter((item) => {
    return item.price < 200;
});

// 7. Transform Inventory Using map()
const report = inventory.map((item) => {
    return `${item.name.toUpperCase()}: $${item.price}`;
});

// 8. Apply Tax and Discount
const taxRate = 0.08;       // 8% tax
const discountRate = 0.05;  // 5% discount

const adjustedTotal = calculateFinalPrice(
    totalValue,
    taxRate,
    discountRate
);

// 9. Final Analytics Report
console.log("\n--- Financial Analytics ---");

console.log("Total Inventory Value: $" + totalValue);

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableItems.map(item => item.name)
);

console.log("Formatted Report List:", report);

console.log(
    "Total After 5% Discount and 8% Tax: $" +
    adjustedTotal.toFixed(2)
);
