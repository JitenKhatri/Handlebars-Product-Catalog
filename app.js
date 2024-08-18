const products = [
    {id: 1,name: 'Mango', description: 'Mango is king of fruits', category: 'Fruit', price:29.99},
    {id: 2,name: 'Okra', description: 'Okra is delicious', category: 'Vegetable', price:9.99},
    {id: 3,name: 'Cat', description: 'Cat are malicious', category: 'Animal', price:79.99},
    {id: 1,name: 'Iron-man toy', description: 'I love you 3000', category: 'Toys', price:59.99},
]

function renderProductList() {
    const source = document.getElementById('product-list-template').innerHTML;
    const template = Handlebars.compile(source);
    const context = {products : products};
    const html = template(context);
    document.getElementById('content').innerHTML = html;
}

function renderProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const source = document.getElementById('product-details-template').innerHTML;
    const template = Handlebars.compile(source);
    const html = template(product);
    document.getElementById('content').innerHTML = html;
}

document.addEventListener('click', function(event) {
if(event.target.classList.contains('view-details')){
    const productId = parseInt(event.target.getAttribute('data-id'));
    renderProductDetails(productId);
} else if(event.target.id === 'back-to-list') {
    renderProductList();
}
});

renderProductList();