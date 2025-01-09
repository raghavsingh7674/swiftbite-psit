 // Handle events on the "billing.html" page    // Retrieve cart data from sessionStorage
    cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    const invoiceTotal = document.getElementById('invoice-total');

    // Display cart items and total
    displayCartItems();
    if (invoiceTotal) {
      invoiceTotal.innerHTML = `Rs: ${sessionStorage.getItem('total')}`;
    }
    let residence = sessionStorage.getItem('residence');
    residence = JSON.parse(residence);
    console.log(residence);
	document.getElementById('client-details').innerHTML = `Client Name: ${residence.name}<br>
          Address: ${residence.address}, Kanpur, India<br>
		   Mobile: ${residence.mobile}<br>
          Email: ${residence.email}`;

    // Add event listeners for removing items
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const index = button.getAttribute('data-index');
        cart.splice(index, 1); // Remove item from cart
        sessionStorage.setItem('cart', JSON.stringify(cart)); // Update cart in sessionStorage
        displayCartItems(); // Refresh cart display
        updateTotal(); // Update total
        if (invoiceTotal) {
          invoiceTotal.innerHTML = `Rs: ${sessionStorage.getItem('total')}`;
        }
      });
    });
     // Function to display cart items on the billing page
  function displayCartItems() {
    const cartContainer = document.getElementById('invoice-items');
    if (!cartContainer) return;

    cartContainer.innerHTML = ''; // Clear previous items
    cart.forEach((item) => {
      cartContainer.innerHTML += `
        <tr class="cart-item">
          <td>${item.description}</td>
          <td>${item.quantity}</td>
          <td>Rs: ${item.price.toFixed(2)}</td>
        </tr>
      `;
    });
  }