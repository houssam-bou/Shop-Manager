async function getData() {
    const response = await fetch("http://localhost:3002/api/products");
    console.log(response.status);

    if (!response.ok) {
        const problem = await response.json();
        console.log(problem.message);
        return;
    }

    const products = await response.json();
    //console.log(products);
    return products;
}

let aa = getData();
// async function handleData() {
//     console.log(await aa);
// }
// handleData();