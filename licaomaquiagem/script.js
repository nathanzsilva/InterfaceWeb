const products = [];

function addProduct() {
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;

    if (productName && productPrice) {
        const product = {
            name: productName,
            price: productPrice
        };

        products.push(product);

        displayProducts();
        
        // Limpa os campos de entrada
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
    }
}

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(function(product) {
        const row = productList.insertRow();
        const cell1 = row.insertCell(0);
        cell1.textContent = product.name;
        
        const cell2 = row.insertCell(1);
        cell2.textContent = product.price;
    });
}

const productForm= document.getElementById('product-form');
productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addProduct();
})
