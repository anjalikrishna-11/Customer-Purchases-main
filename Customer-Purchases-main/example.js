// example.js
// Wait for the DOM content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Use D3 to load the CSV file containing purchase order data
    d3.csv("data/purchase_orders.csv").then(function(data) {
        // Select the unordered list element with the ID 'order-list'
        var ul = d3.select("#order-list");
        // Iterate over each order in the data
        data.forEach(function(order) {
            // Append a new list item for each order to the unordered list
            ul.append("li")
                // Set the text content of the list item to the formatted order details
                .text(`${order.customerName} - Order ID: ${order.orderId} - Purchase Amount: ${order.purchaseAmount}`);
        });
    }).catch(function(error) {
        // Log any errors that occur during the data loading process
        console.error('Error loading the CSV data:', error);
    });
});

        
