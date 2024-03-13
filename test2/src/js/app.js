/**
 * app.js
 * Author: Talent Nyota
 * StudentID: 100764212
 * Date Modified: 2024-03-11
 * Description: This script enhances the functionality of a webpage by dynamically updating 
 * the content of a table based on user interactions or predefined criteria. Using j QURY
 */

$(document).ready(function() {
    // console.log("Document ready!");

    // Update the page title
    document.title = "Talent Nyota - Test 2"; 
    console.log("Title updated to: " + document.title);

    // Reference to the test table and update the second row's student number
    var secondRowStudentNumber = $("#test-table tr:eq(1) td:eq(2)").text("100100100").text();
    // console.log("Second row student number updated to: " + secondRowStudentNumber);

    // Remove the row for Alice Bobberts
    $("#test-table tr").each(function(index) {
        var $this = $(this);
        var firstName = $this.find("td:first").text();
        var lastName = $this.find("td:eq(1)").text();
        if (firstName === "Alice" && lastName === "Bobberts") {
            // console.log("Removing row for Alice Bobberts at index: " + index);
            $this.remove();
        }
    });

    // Create and add a new row for Talent Nyota
    var newRow = $("<tr></tr>").addClass("table-info");
    newRow.append($("<td>Talent</td>"));
    newRow.append($("<td>Nyota</td>"));
    newRow.append($("<td>100764212</td>"));
    $("#test-table tbody").append(newRow);
    // console.log("New row for Talent Nyota added.");

    // Remove .table-warning class from Adam Kunz's row and adjust John Doe's row
    $("#test-table tr").each(function() {
        var $this = $(this);
        var firstName = $this.find("td:first").text();
        var lastName = $this.find("td:eq(1)").text();
        if (firstName === "Adam" && lastName === "Kunz") {
            $this.removeClass("table-warning");
            console.log("Removed .table-warning from Adam Kunz's row.");
        }
        if (firstName === "John" && lastName === "Doe") {
            $this.removeClass("table-dark").addClass("table-success");
            console.log("Changed John Doe's row from .table-dark to .table-success.");
        }
    });
    
    var $container = $('<div class="container"></div>');
    $('main').append($container);

    // card
    var $card = $('<div class="card" style="width: 18rem;"></div>');

    var $img = $('<img class="card-img-top" src="holder.js/100px180" alt="Card image cap">');
    $card.append($img);

   
    var $cardBody = $('<div class="card-body"></div>');
    $card.append($cardBody);

    
    var $heading = $('<h5 class="card-title">Talent Nyota</h5>');
    var $paragraph = $('<p class="card-text">I love learning new things, i get excited if i come across something new.</p>');
    var $link = $('<a href="#" class="btn btn-primary">Go somewhere</a>');

    $cardBody.append($heading);
    $cardBody.append($paragraph);
    $cardBody.append($link);

    
    $container.append($card);

    // Initialize holder.js
    Holder.run();
});




  

