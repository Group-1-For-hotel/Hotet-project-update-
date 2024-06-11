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

function initMap() {
    const hotelLocation = { lat: -25.363, lng: 131.044 }; // Replace with your hotel's latitude and longitude
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: hotelLocation,
    });
    const marker = new google.maps.Marker({
        position: hotelLocation,
        map: map,
    });
}



// reservation

document.getElementById('booking-form').addEventListener('submit',function(event){
    event.preventDefault();
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const checkin=document.getElementById('checkin').value
    const checkout=document.getElementById('checkout').value
    const time=document.getElementById('time').value
    const guest=document.getElementById('guests').value

    document.getElementById('dis-name').innerHTML=`Name:  ${name}`
    document.getElementById('dis-email').innerHTML=`Email: ${email}`
    document.getElementById('dis-in-date').innerHTML=`Check-In-Date: ${checkin}`
    document.getElementById('dis-out-date').innerHTML=`Check-Out-Date: ${checkout}`
    document.getElementById('dis-time').innerHTML=`Time: ${time}`
    document.getElementById('dis-guest').innerHTML=`Guest: ${guest}`


    document.getElementById('booking-form').style.display=`none`
    document.getElementById('display').style.display=`block`
    document.getElementById('display').style.border=`4px dashed grey`
    document.getElementById('display').style.padding=`20px`
});




