const products = [
    {name:"Cloth" , description:"Soft cotton fabric, perfect",price:1000} ,
    {name:"Coat" , description:"Premium winter coat",price:5000} ,
    {name:"Shoes" , description:"Comfortable leather shoes",price:2000} ,
    {name:"Shirt" , description:"Classic cotton shirt",price:1500} ,
    {name:"Pant" , description:"Stylish trousers",price:1200} ,
    {name:"Jacket" , description:"Trendy casual jacket ",price:3000} ,
];

function productsFetch() {
    return products.map(products => {
        return {
            name:products.name ,
            description:products.description ,
            price:products.price ,
        };
    });
}

function displayProducts() {
    const productsListContainer = document.getElementById('products-list');
    const fetchedProducts = productsFetch();
    
    // Clear existing content
    productsListContainer.innerHTML = '';
    
    // Create HTML for each product
    fetchedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-card';
        
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">$${product.price}</p>
        `;
        
        productsListContainer.appendChild(productDiv);
    });
}

// Display products when page loads
document.addEventListener('DOMContentLoaded', displayProducts);

console.log(productsFetch());