document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});
function calculateTotal() {
    const fastfoodQuantity = document.getElementById('fastfood-quantity').value;
    const juiceQuantity = document.getElementById('juice-quantity').value;
    const coffeeQuantity = document.getElementById('coffee-quantity').value;
    
    const fastfoodPrice = 7; // Example price
    const juicePrice = 6; // Example price
    const coffeePrice = 6; // Example price
    
    const totalAmount = (fastfoodQuantity * fastfoodPrice) + (juiceQuantity * juicePrice) + (coffeeQuantity * coffeePrice);
    
    document.getElementById('total-amount').value = totalAmount.toFixed(2);
}

function calculateTotal() {
    const roomType = document.getElementById('roomType').value;
    const checkInDate = new Date(document.getElementById('checkInDate').value);
    const checkOutDate = new Date(document.getElementById('checkOutDate').value);

    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((checkOutDate - checkInDate) / oneDay));

    const roomPrices = {
        "Single Room": 100,
        "Double Room": 200,
        "Master Room": 300,
        "Family Room": 400
    };

    const totalAmount = diffDays * roomPrices[roomType];

    return totalAmount;
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('number').value;
    const roomType = document.getElementById('roomType').value;
    const checkin = document.getElementById('checkInDate').value;
    const checkout = document.getElementById('checkOutDate').value;
    const totalAmount = calculateTotal();

    document.getElementById('dis-name').innerHTML = `Name: ${name}`;
    document.getElementById('dis-email').innerHTML = `Email: ${email}`;
    document.getElementById('dis-phone-number').innerHTML = `Phone Number: ${phone}`;
    document.getElementById('dis-room-type').innerHTML = `Room Type: ${roomType}`;
    document.getElementById('dis-in-date').innerHTML = `Check-In Date: ${checkin}`;
    document.getElementById('dis-out-date').innerHTML = `Check-Out Date: ${checkout}`;
    document.getElementById('dis-total-amount').innerHTML = `Total Amount: $${totalAmount}`;

    document.querySelector('.booking-form').style.display = 'none';
    document.getElementById('display').style.display = 'block';
    document.getElementById('display').style.border = '4px dashed white';
    document.getElementById('display').style.padding = '20px';
});




