document.getElementById('orderButton').addEventListener('click', function() {
    var selectedFoods = document.querySelectorAll('.foodItem input:checked');
    if (selectedFoods.length === 0) {
      alert('Please select at least one food item!');
      return;
    }

    var orderButton = document.getElementById('orderButton');
    orderButton.disabled = true;
    orderButton.textContent = 'Processing...';

    var foodImages = {
      Burger: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJdZCq3sM4SUnknNsfvVIrtZckE8FIzAv9A&s',
      Pizza: 'pizza.jpg',
      Sushi: 'shushi.jpg',
      Tacos: 'taco.jpg'
    };

    var selectedFood = selectedFoods[Math.floor(Math.random() * selectedFoods.length)].value;
    var orderId = Math.floor(Math.random() * 10000);

    var foodImage = document.getElementById('foodImage');
    foodImage.src = foodImages[selectedFood];
    foodImage.style.display = 'block';

    var orderIdElement = document.getElementById('orderId');
    orderIdElement.textContent = 'Order ID: ' + orderId;

    setTimeout(function() {
      orderButton.disabled = false;
      orderButton.textContent = 'Order Food';
      foodImage.style.display = 'none';
      orderIdElement.textContent = '';
    }, Math.floor(Math.random() * 5000) + 2000);
  });