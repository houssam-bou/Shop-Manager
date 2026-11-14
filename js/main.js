import { displayCategory, displayProducts, searchProductInput, searchProductsByName,
    searchProductsByCategories,categorySelect, searchProductsByPrice,maxPriceInput} from "./ui.js";
import { products , categories} from "./utils.js";


displayProducts(products);
displayCategory(categories);



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

categorySelect.addEventListener("change", async (event) =>{
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
maxPriceInput.addEventListener("input", async (event) =>{
        const maxPriceValue = event.target.value;
        
    console.log(maxPriceValue);
    try {
        if (maxPriceValue == "")
        {
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