import { url } from "./ui.js";

async function getData() {
    try {
        const response = await axios.get(`${url}/products`)

        console.log(response.status);

        const products = response.data;

        return products;

    } catch (err) {
        Swal.fire({
            title: err,
            text: err.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}

const products = await getData();

async function getCategory() {
    try {
        const response = await axios.get(`${url}/categories`)

        console.log(response.status);

        const categories = response.data;

        return categories;

    } catch (err) {
        Swal.fire({
            title: err,
            text: err.message,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    }
}
const categories = await getCategory();



export { products, getData, categories, getCategory };