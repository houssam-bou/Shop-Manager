import {totalPrice} from "./main.js"
const productsContainer = document.getElementById("products-container");
const url = "http://localhost:3002/api";
const searchProductInput = document.getElementById("search");
const productsCount = document.getElementById("products-count");
const categorySelect = document.getElementById("category");
const maxPriceInput = document.getElementById("max-price");
const inStock = document.getElementById("in-stock");
const reintilasierBtn = document.getElementById("reintilasier");
const filtrerBtn = document.getElementById("filtrer");
const cartModal = document.getElementById("cart-modal");
const panierBtn = document.getElementById("panier");
const buttonCancelPanier = document.getElementById("button-cancel-panier");
const modalProductsContainer = document.getElementById("modal-products-container");
const overlay = document.getElementById("overlay");
const modalProductsCounter = document.getElementById("modal-products-counter");
const modalProductsTotal = document.getElementById("modal-products-total");



export {
    productsContainer, url, searchProductInput, displayProducts,
    productsCount, searchProductsByName, categorySelect, displayCategory, maxPriceInput,
    searchProductsByCategories, searchProductsByPrice, searchProductsByStock, inStock, reintilasierBtn,
    filtrerBtn, applyFilters, cartModal, panierBtn, buttonCancelPanier,
    displayProductsInModal, overlay, addedProductsLocalStorage, getProductById, convertItemToJsValue
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
            <p>stock : ${element.stock}</p>
            </div>
            <div id="button-div">
            <button id="add-product" data-id="${element.id}">add product</button>
            <input type="number" id="quantity" min="1" max="20" step="1" value="1">   
            </div>
        </article>`;
    });
}
function displayCategory(categories) {

    categorySelect.innerHTML = `<option value="" selected disabled>Toutes les catégories</option>`;
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
                categoryId: selectedCategorie
            }
        });

        return response.data;

    } catch (error) {
        console.error(error);
    }
}
async function searchProductsByPrice(maxPriceValue) {
    try {
        if (maxPriceValue == "") {
            displayProducts(products)
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
async function searchProductsByStock(enStock) {
    try {
        const response = await axios.get(`${url}/products`, {
            params: {
                inStock: enStock
            }
        });

        return response.data;

    } catch (error) {
        console.error(error);
    }
}
async function applyFilters() {
    try {
        const params = {};

        const searchValue = searchProductInput.value;
        const selectedCategory = categorySelect.value;
        const maxPriceValue = maxPriceInput.value;
        const stockValue = inStock.checked;
        console.log(params);


        if (searchValue !== "") {
            params.search = searchValue;
        }

        if (selectedCategory !== "") {
            params.categoryId = selectedCategory;
        }

        if (maxPriceValue !== "") {
            params.maxPrice = maxPriceValue;
        }

        if (stockValue) {
            params.inStock = true;
        }
        console.log(params);
        const response = await axios.get(`${url}/products`, {
            params
        })
        console.log(response.data);
        displayProducts(response.data);

    } catch (error) {
        console.error(error);
    }
}

function getProductById(id, products) {
    return products.find(product => product.id == id);
}

function displayProductsInModal(addedProducts) {

    //    addedProducts =  JSON.parse(localStorage.getItem("addedProducts"));  
    
    modalProductsCounter.textContent = `produits trouvés    :${addedProducts.length}`;
    modalProductsTotal.textContent = `total price :${totalPrice} $`
    modalProductsContainer.innerHTML = "";
    addedProducts.forEach(product => {
        modalProductsContainer.innerHTML += `<article class="article-modal">

        <img src="http://localhost:3002${product.image}" alt="#" />
        <div id="modal-card-text">
            <h3 data-id=${product.id}>${product.name}</h3>
            <h3>price :  ${product.price}$</h3>
             <h3>stock :  ${product.stock}</h3>
            </div>
            <div id="modal-select-div">
            <input type="number" id="quantity" min="1" max="20" step="1" value="${product.quantity}">  
            </div>
        </article>`

    });

}
function addedProductsLocalStorage(addedProducts) {

     localStorage.setItem("addedProducts", JSON.stringify(addedProducts))  || [];
}

function convertItemToJsValue(){

  return JSON.parse(localStorage.getItem("addedProducts"));

}
// localStorage.clear();