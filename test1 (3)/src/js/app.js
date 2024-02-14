/**
 * app.js
 * Author: Talent Nyota
 * StudentID: 100764212
 * Date Modified: 2024-02-14
 * Description: This script enhances the functionality of a webpage by dynamically updating 
 * the content of a table based on user interactions or predefined criteria. It modifies the DOM to:
 */

(function() {

    document.title = "Talent Nyota - Test 1"; // Question 1: Update the page title

    const testTable = document.getElementById("test-table"); // Question 2: Reference to the test table
    const secondRow = testTable.rows[1]; // Reference to the second row
    secondRow.cells[2].textContent = "100100100"; // Update the student number

    const newRow = testTable.insertRow(); // Question 3: Create and add a new row
    ["TALENT", "NYOTA", "100764212"].forEach((text, index) => {
        const cell = newRow.insertCell(index);
        cell.textContent = text;
    });

    testTable.deleteRow(3); // Question 4: Remove Alice Bobberts using 0-based indexing and she's the 3rd row

    newRow.classList.add("table-info"); // Question 5: Add .table-info class to your row

    // Remove .table-warning class from Adam Kunz's row 
    const rows = testTable.getElementsByTagName("tbody")[0].rows;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === "Adam" && rows[i].cells[1].textContent === "Kunz") {
            rows[i].classList.remove("table-warning");
            break; 
        }
    }
    
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === "John" && rows[i].cells[1].textContent === "Doe") {
            rows[i].classList.remove("table-dark");
            rows[i].classList.add("table-success");
            break; 
        }
    }

})(); 

  

   