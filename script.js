let product = document.getElementById('product');
let page = 1;

let btn = document.getElementById('btn');

btn.addEventListener("click", (e) => {
    page++
    getProduct();
})


function getProduct() {
    fetch(`http://localhost:3000/products?_page=${page}&_limit=3`)
    .then(res => res.json())
    .then(json => {
        let productHtml = product.innerHTML;
        json.map(data => {
            console.log(data)
            productHtml += products(data.title,data.image,data.price)
        })
        product.innerHTML = productHtml;
    })
}

getProduct();



function products(title, img, price) {
    let product = `
    <div class="inner-product">
        <div class="image">
            <img src=${img} alt="Phone">
        </div>
        <div class="inner-text">
            <h3>Title:<span>${title}</span></h3>
            <h3>Price:<span>$${price}</span></h3>
        </div>
    </div>
    `;
    return product;
}