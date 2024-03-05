document.getElementById("getXhr") 
    .addEventListener('click', e => {
        makeXhr(); 
    });

function makeXhr() {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                handleSuccess(this);
            } else {
                handleError(this);
            }
        }
    };

    request.open('GET', './products.json', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();
}

function handleSuccess(res) {
    const data = JSON.parse(res.responseText);
    const container = document.getElementById('xhr-table');
    container.innerHTML = ''; // Clear previous content

    const table = document.createElement('table');
    table.classList.add('table', 'table-striped');

    // Create table header
    let thead = table.createTHead();
    let row = thead.insertRow();
    let thName = document.createElement("th");
    let thPrice = document.createElement("th");
    thName.innerHTML = "Product Name";
    thPrice.innerHTML = "Price";
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

function handleError(res) {
    console.error('Failed to fetch:', res);
    alert('Failed to fetch data!');
}




      
