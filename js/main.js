import { productsContainer } from "./ui.js";
import { response } from "./utils.js";


createElement(response);

 function createElement(response) {
    response.forEach(element => {
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
