const productsContainer = document.getElementById("products-container");
const url = "http://localhost:3002/api";
const searchProductInput = document.getElementById("search");
const productsCount = document.getElementById("products-count");
const categorySelect = document.getElementById("category");
const maxPriceInput = document.getElementById("max-price");


export {
    productsContainer, url, searchProductInput, displayProducts,
    productsCount, searchProductsByName, categorySelect, displayCategory, maxPriceInput,
    searchProductsByCategories, searchProductsByPrice
};


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
function displayCategory(categories) {

    categorySelect.innerHTML = `<option value="">Toutes les catégories</option>`;
    categories.forEach(element => {
        categorySelect.innerHTML += `<option value="${element.id}">${element.name}</option>`
    })

}

async function searchProductsByName(searchValue) {
    try {
        const response = await axios.get(`${url}/products`, {
            params: {
                search: searchValue
            }
        });

        return response.data;

    } catch (error) {
        console.error(error);
    }
}
async function searchProductsByCategories(selectedCategorie) {
    try {
        const response = await axios.get(`${url}/products`, {
            params: {
                categoryId : selectedCategorie
            }
        });

        return response.data;

    } catch (error) {
        console.error(error);
    }
}
async function searchProductsByPrice(maxPriceValue) {
    try {
        if (maxPriceValue == "")
        {
            displayProducts()
        }
        const response = await axios.get(`${url}/products`, {
            params: {
                maxPrice: maxPriceValue
            }
        });

        return response.data;

    } catch (error) {
        console.error(error);
    }
}


