import {
    displayCategory, displayProducts, searchProductInput, searchProductsByName,
    searchProductsByCategories, categorySelect, searchProductsByPrice, maxPriceInput,
    searchProductsByStock, inStock, reintilasierBtn, filtrerBtn, applyFilters,
    productsContainer, cartModal, panierBtn, buttonCancelPanier, displayProductsInModal,
    overlay, addedProductsLocalStorage, getProductById, convertItemToJsValue
} from "./ui.js";
import { products, categories } from "./utils.js";

let addedProducts = [];
export let totalPrice = 0;

displayProducts(products);
displayCategory(categories);

addedProducts = JSON.parse(localStorage.getItem("addedProducts")) || []
displayProductsInModal(addedProducts);



searchProductInput.addEventListener("input", async (event) => {
    const searchValue = event.target.value;
    console.log(searchValue);
    try {
        const searchingProduct = await searchProductsByName(searchValue);

        displayProducts(searchingProduct);

    }
    catch (error) {
        console.error(error);
    }
});

categorySelect.addEventListener("change", async (event) => {
    const selectedCategorie = event.target.value;

    console.log(selectedCategorie);
    try {
        const searchingProductByCategories = await searchProductsByCategories(selectedCategorie);

        displayProducts(searchingProductByCategories);
    }
    catch (error) {
        console.error(error);
    }
})
maxPriceInput.addEventListener("input", async (event) => {
    const maxPriceValue = event.target.value;

    console.log(maxPriceValue);
    try {
        if (maxPriceValue == "") {
            displayProducts(products);
            return;
        }
        const searchingProductByPrice = await searchProductsByPrice(maxPriceValue);

        displayProducts(searchingProductByPrice);
    }
    catch (error) {
        console.error(error);
    }
})
inStock.addEventListener("change", async (event) => {
    const enStock = event.target.checked;

    console.log(enStock);
    try {
        if (!enStock) {
            displayProducts(products);
            return;
        }
        const searchingProductByStock = await searchProductsByStock(enStock);

        displayProducts(searchingProductByStock);
    }
    catch (error) {
        console.error(error);
    }
})
reintilasierBtn.addEventListener("click", async (event) => {
    console.log(event.target);

    try {

        searchProductInput.value = "";
        categorySelect.value = "";
        maxPriceInput.value = "";
        inStock.checked = false;

        displayProducts(products);

    } catch (error) {
        console.error(error);
    }
})
filtrerBtn.addEventListener("click", applyFilters);

productsContainer.addEventListener("click", (e) => {
    let targetBtn = e.target.closest('#add-product')
    if (!targetBtn) {
        return;
    }
    console.log(targetBtn);

    Swal.fire({
        title: "Do you want to add this product?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Add product",
        denyButtonText: `Don't add`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
            let addedProductsId = targetBtn.getAttribute("data-id");
            // console.log(addedProductsId);
            let foundProduct = getProductById(addedProductsId, products);

            console.log(foundProduct);
            totalPrice += foundProduct.price;
            console.log(totalPrice);
            
            let newFondProduct = getProductById(foundProduct.id, addedProducts);
            if (!newFondProduct) {
                foundProduct.quantity = 1;
                addedProducts.push(foundProduct);
                console.log(foundProduct.quantity);
            }
            else {
                foundProduct.quantity++;
            }
            //console.log(totalPrice);


            // console.log(newFondProduct);
            console.log(addedProducts);

            addedProductsLocalStorage(addedProducts);
            convertItemToJsValue(addedProducts);
            displayProductsInModal(addedProducts);
            cartModal.classList.toggle("hidden");
            overlay.classList.remove("hidden");
        }
        else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
    });

})
panierBtn.addEventListener("click", (e) => {
    //console.log(e.target, "you have clicked");
    cartModal.classList.toggle("hidden");
    overlay.classList.remove("hidden");
})
buttonCancelPanier.addEventListener("click", (e) => {
    cartModal.classList.toggle("hidden");
    overlay.classList.add("hidden")
})