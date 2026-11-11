import { url } from "./ui.js";

async function getData() {
    const response = await fetch(url);
    console.log(`the response status is :  ${response.status}`);

    if (!response.ok) {
        const problem = await response.json();
        console.log(problem.message);
        return;
    }

    const products = await response.json();
    return products;
}
const response = await getData();
export {response};