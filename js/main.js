import { displayProducts, searchProductInput, searchProducts } from "./ui.js";
import { products } from "./utils.js";


displayProducts(products);




searchProductInput.addEventListener("input", async (event) => {
    const searchValue = event.target.value;
    console.log(searchValue);
    try {
        const searchingProduct = await searchProducts(searchValue);

        displayProducts(searchingProduct);

    }
    catch (error) {
        console.error(error);
    }
});