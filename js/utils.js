import { url } from "./ui.js";

export async function getData() {
    try {
        const response = await axios.get(url)

        console.log(response.status);

        const products = response.data;

        return products;

    } catch (err) {
        console.log(err.message);
    }
}


const response = await getData();
export { response };