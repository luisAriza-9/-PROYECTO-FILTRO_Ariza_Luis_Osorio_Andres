document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    const products = [
        { id: 1, name: "Producto 1", price: 10.00 },
        { id: 2, name: "Producto 2", price: 20.00 },
        { id: 3, name: "Producto 3", price: 15.00 }
    ];

    // Mostrar productos en el catálogo
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.innerHTML = `
            <p>${product.name} - $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Agregar al carrito</button>
        `;
        productList.appendChild(productItem);
    });

    // Función para agregar productos al carrito
    window.addToCart = function (productId, productName, productPrice) {
        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${productName} - $${productPrice.toFixed(2)}`;
        cartItems.appendChild(cartItem);

        // Actualizar el total
        updateTotal(productPrice);
    };

    // Función para actualizar el total del carrito
    function updateTotal(price) {
        const currentTotal = parseFloat(totalElement.innerText);
        const newTotal = currentTotal + price;
        totalElement.innerText = newTotal.toFixed(2);
    }
});