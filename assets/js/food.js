document.addEventListener('DOMContentLoaded', () => {
    const orderList = document.getElementById('order-list');
    const totalPriceElem = document.getElementById('total-price');
    let totalPrice = 0;

    // Function to update the total price
    function updateTotalPrice(amount) {
        totalPrice += amount;
        totalPriceElem.textContent = totalPrice.toFixed(2);
    }

    // Function to remove an item from the order list
    function removeOrderItem(listItem, itemPrice) {
        orderList.removeChild(listItem);
        updateTotalPrice(-itemPrice);
    }

    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));

            // Add item to the order list
            const listItem = document.createElement('li');
            listItem.innerHTML = `${itemName} - $${itemPrice.toFixed(2)} <button class="delete-btn">Delete</button>`;
            orderList.appendChild(listItem);

            // Update total price
            updateTotalPrice(itemPrice);

            // Add delete functionality to the newly added delete button
            listItem.querySelector('.delete-btn').addEventListener('click', () => {
                removeOrderItem(listItem, itemPrice);
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.order-btn');

    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-name');
            const itemPrice = this.getAttribute('data-price');
            alert(`You ordered: ${itemName} for $${itemPrice}`);
        });
    });
});