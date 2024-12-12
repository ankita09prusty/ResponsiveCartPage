document.addEventListener("DOMContentLoaded", function () {
    const cartData = {
        items: [
            { id: 1, title: "Asgaard Sofa", image: "assets/images/asgaardsofa.png", price: 2500000, quantity: 1 },

        ]
    };

    function displayCartData() {
        const cartItemsContainer = document.getElementById("cart-items-container");
        const subtotalElement = document.getElementById("subtotal");
        const totalElement = document.getElementById("total");

        let total = 0;
        cartItemsContainer.innerHTML = "";

        cartData.items.forEach(item => {
            total += item.price * item.quantity;

            cartItemsContainer.innerHTML += `
                <tr>
                    <td><img src="${item.image}" alt="${item.title}" class="product-image"> ${item.title}</td>
                    <td>₹ ${item.price}</td>
                    <td><input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input"></td>
                    <td>₹ ${item.price * item.quantity}</td>
                    <td><button data-id="${item.id}" class="remove-item">🗑️</button></td>
                </tr>`;
        });

        subtotalElement.innerText = `Subtotal: ₹${total}`;
        totalElement.innerText = `Total: ₹${total}`;
    }

    document.querySelector(".cart-items").addEventListener("input", function (event) {
        if (event.target.classList.contains("quantity-input")) {
            const id = parseInt(event.target.getAttribute("data-id"));
            const item = cartData.items.find(item => item.id === id);
            item.quantity = parseInt(event.target.value);
            displayCartData();
        }
    });



    displayCartData();
});
