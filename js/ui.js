const productsContainer = document.getElementById("products-container");
const url = "http://localhost:3002/api/products";
const searchProductInput = document.getElementById("search");
const productsCount = document.getElementById("products-count");



function displayProducts(products) {

    productsCount.textContent = `${products.length} produits trouvés`;
    productsContainer.innerHTML = "";
    products.forEach(element => {
        productsContainer.innerHTML += `<article>
          <img src="http://localhost:3002${element.image}" alt="#" />
          <div id="card-text">
            <h2>${element.name}</h2>
            <h2>price :  ${element.price}$</h2>
            <p>${element.description}</p>
            </div>
            <div id="button-div">
            <button id="add-product" data-id="${element.id}">add product</button>
            </div>
        </article>`;
    });
}

async function searchProducts(searchValue) {
    try {
        const response = await axios.get(`${url}`, {
            params: {
                search: searchValue
            }
        });

        return response.data;

    } catch (error) {
        console.error(error);
    }
}




export {productsContainer, url, searchProductInput, displayProducts, productsCount, searchProducts};