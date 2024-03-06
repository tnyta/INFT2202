document.getElementById("getXhr").addEventListener('click', function() {
    makeXhr();
});

async function makeXhr() {
    try {
        const response = await fetch('js/products.json', {
            method: 'GET', // Fetch API uses 'method' instead of 'type'
            headers: {
                'Content-Type': 'application/json' // Ensure proper content type is set
            }
        });

        if (!response.ok) { // Check if the response status is OK (200-299)
            throw new Error('Network response was not ok.');
        }

        const data = await response.json(); // Parse JSON data from the response
        handleSuccess(data); // Handle the parsed data
    } catch (error) {
        handleError(error); // Handle any errors
    }
}

function handleSuccess(data) {
    console.log('Parsed data:', data);

    const container = document.getElementById('xhr-table');
    container.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    // Create table header
    let thead = table.createTHead();
    let row = thead.insertRow();
    let thName = document.createElement("th");
    let thPrice = document.createElement("th");
    thName.textContent = "Product Name";
    thPrice.textContent = "Price";
    row.appendChild(thName);
    row.appendChild(thPrice);

    // Populate table rows
    data.forEach(item => {
        let row = table.insertRow();
        let name = row.insertCell(0);
        let price = row.insertCell(1);
        name.textContent = item.name;
        price.textContent = item.price;
    });

    container.appendChild(table);
}

function handleError(error) {
    console.error('Failed to fetch:', error);
    alert('Failed to fetch data!');
}
