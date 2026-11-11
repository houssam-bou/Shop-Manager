import { productsContainer } from "./ui.js";

async function getData() {
    const response = await fetch("http://localhost:3002/api/products");
    console.log(response.status);

    if (!response.ok) {
        const problem = await response.json();
        console.log(problem.message);
        return;
    }

    const products = await response.json();
    console.log(products);
    // return products;
    createElement(products);
}
 function createElement(products) {
    products.forEach(element => {
        productsContainer.innerHTML += `<article>
          <img src="http://localhost:3002${element.image}" alt="#" />
          <div>
            <h2>${element.name}</h2>
            <h2>${element.price}$</h2>
          </div>
          <p>${element.description}</p>
          <button>add product</button>
        </article>`;
    });
}

