document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-btn');
    const orderList = document.getElementById('order-list');
    const totalPriceElem = document.getElementById('total-price');
    const confirmOrderBtn = document.getElementById('confirm-order-btn');
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

    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-name');
            const itemPrice = parseFloat(button.getAttribute('data-price'));

            // Display alert when item is ordered
            alert(`You ordered: ${itemName} for $${itemPrice.toFixed(2)}`);

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

    confirmOrderBtn.addEventListener('click', () => {
        if (orderList.children.length === 0) {
            alert("Your order list is empty.");
        } else {
            alert("Thank you for your order!");
            orderList.innerHTML = '';
            totalPrice = 0;
            totalPriceElem.textContent = totalPrice.toFixed(2);
        }
    });

    // Burger menu functionality
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});
