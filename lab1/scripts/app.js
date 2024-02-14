/**
 * app.js
 * Author: Talent Nyota
 * StudentID: 100761242
 * Date Completed: 2024-01-27
 * Description: This script handles the dynamic content injection for the home, product, services, and about us pages. It also manipulates the DOM to change navbar links and adds a fixed bottom navbar. A contact form submission with redirection is implemented as well.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Identify the page by a unique element ID
    if (document.getElementById('homePage')) {
        // Inject home page content
        injectHomePageContent();
    } else if (document.getElementById('productPage')) {
        // Inject product page content
        injectProductPageContent();
    } else if (document.getElementById('servicesPage')) {
        // Inject services page content
        injectServicesPageContent();
    } else if (document.getElementById('aboutUsPage')) {
        // Inject about us page content
        injectAboutUsContent();
    } else if (document.getElementById('contactPage')) {
        // Setup contact page form
        setupContactForm();
    }

    // Functions that are common to all pages, enhancing or modifying the navbar
    addMainNavbar(); // Adds the main navigation bar to the top of the page
    changeProductsToInterests(); // Changes "Products" link in the navbar to "Interests"
    addHumanResourcesLink();  // Adds a "Human Resources" link to the navbar
    addFixedBottomNavbar(); // Adds a fixed navbar at the bottom of the page
});


/**
 * Registration and Login Functionality
 */

// User class definition
class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

// Document ready function to handle form submissions
$(document).ready(function() {
    // Logic for the registration form validation and submission
    $('#registerForm').submit(function(e) {
        e.preventDefault(); // Prevent the default form behavior

        // Initialize error message and validation flag
        let errorMessage = '';
        let isValid = true;

        // Retrieve form data
        const firstName = $('#firstName').val().trim();
        const lastName = $('#lastName').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val().trim();
        const confirmPassword = $('#confirmPassword').val().trim();

        // Validate First and Last Name for minimum length
        if (firstName.length < 2 || lastName.length < 2) {
            errorMessage += 'First and Last Name must be at least 2 characters long.\n';
            isValid = false;
        }

        // Validate Email for minimum length and presence of '@'
        if (email.length < 8 || !email.includes('@')) {
            errorMessage += 'Email must be at least 8 characters long and contain an @ symbol.\n';
            isValid = false;
        }

        // Validate Passwords for match and minimum length
        if (password !== confirmPassword) {
            errorMessage += 'Passwords do not match.\n';
            isValid = false;
        }
        if (password.length < 6) {
            errorMessage += 'Password must be at least 6 characters long.\n';
            isValid = false;
        }

        // Show error message if validation fails
        if (!isValid) {
            $('#ErrorMessage').text(errorMessage).show();
        } else {
            // Hide the error message
            $('#ErrorMessage').hide();

            // Create a new User instance and log it to the console
            const newUser = new User(firstName, lastName, email, password);
            console.log(newUser);

            // Clear the form fields after successful registration
            $('#registerForm').trigger('reset');
        }
    });

    // Login functionality - Add the user's name to the navbar on login
    $('#loginForm').submit(function(e) {
        e.preventDefault(); // Prevent the default form behavior
        const username = $('#loginUsername').val().trim();

        // insert the username into the navbar
        $('#usernamePlaceholder').text(username).show();
        $('#loginLink').hide();
        $('#logoutLink').show();
        
        // window.location.href = 'index.html';
    });

});

// Function to add the main navigation bar to the page
function addMainNavbar() {
    // HTML string for the main navbar, including links to different pages
    const mainNavbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">INFT2202 - Lab 1</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="product.html"><i class="fas fa-box-open"></i> Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="services.html"><i class="fas fa-concierge-bell"></i> Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html"><i class="fas fa-users"></i> About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html"><i class="fas fa-envelope"></i> Contact Us</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <span id="usernamePlaceholder" class="navbar-text" style="display: none;"></span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a>
                        </li>
                        <li class="nav-item" style="display: none;">
                            <a class="nav-link" id="logoutLink" href="#"><i class="fas fa-sign-out-alt"></i> Logout</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="register.html"><i class="fas fa-user-plus"></i> Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    // Inserts the navbar HTML at the beginning of the <body>, making it appear at the top of the page
    document.body.insertAdjacentHTML('afterbegin', mainNavbarHTML);
}

// Function to inject content into the home page
function injectHomePageContent() {
    // HTML string for the home page content
    const indexContentHTML = `
        <div class="container-fluid" style="background-image: url('../images/image2.png'); background-size: cover; background-position: center; height: 100vh;');">
            <div class="container text-center text-black py-5">
                <h1>Welcome to My Site</h1>
                <p>This is where your journey begins. Explore my favorite media, my offered services, and learn more about me.</p>
            </div>
        </div>
    `;

    // Select the main content div based on its ID and inject the home page content
    const mainContentDiv = document.getElementById('main-content');
    mainContentDiv.innerHTML = indexContentHTML;
}
// Function to inject content into the product page
function injectProductPageContent() {
    // Select the product content div by its ID
    const mainContentDiv = document.getElementById('product-content');
    mainContentDiv.innerHTML = ''; // Clear existing content
    
    // Create a new div to hold product cards
    const row = document.createElement('div');
    row.className = 'row'; // Assign Bootstrap's row class for layout
    
    // Define an array of product details
    const products = [
        // Example product: Blue Ocean Strategy book
        {
            type: "Book",
            title: "Blue Ocean Strategy",
            imagePath: "images/blueocean.png",
            description: "Blue Ocean Strategy revolutionizes the way we think about the market space. Challenging the traditional competitive battlegrounds, it introduces a world of innovation and untapped opportunities – a must-read for aspiring market leaders."
        },
        {
            type: "Book",
            title: "Unreasonable Hospitality",
            imagePath: "images/finedinning.jpg",
            description: "Will Guidara's Unreasonable Hospitality redefines the art of service. It's an inspiring journey through the power of giving more than what's expected and transforming the ordinary into extraordinary experiences."
        },
        {
            type: "Discovery",
            title: "Meerkat FOMO",
            imagePath: "images/meeks.jpg",
            description: "The meerkats' spirited social dynamics humorously capture the essence of FOMO. Their perpetual alertness and communal engagement is a wild reflection of our own quest to stay connected and informed."
        }
    ];
    
    // Iterate over the products array to create and append card elements for each product
    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-4 mb-4'; // Bootstrap classes for column layout


        const card = document.createElement('div');
        card.className = 'card d-flex flex-column align-items-center'; // Flex classes for alignment
        card.style.width = 'fit-content'; // Set the card width to fit the content
        card.style.backgroundColor = '#343a40'; 

        const img = document.createElement('img');
        img.className = 'card-img-top img-fluid';
        img.src = product.imagePath;
        img.alt = product.title;
        img.style.width = '80%'; // Set the width to 25% of its container
        img.style.height = 'auto'; // Set the height to auto to maintain aspect ratio
        // Circular shape
        img.style.objectFit = 'cover'; // Ensures the image covers the area without stretching
        img.style.objectPosition = 'center'; // Centers the image within the circular shape

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column'; // flex classes to align items to the bottom

        // Type label
        const typeLabel = document.createElement('h6');
        typeLabel.className = 'text-uppercase fw-bold mb-2';
        typeLabel.textContent = product.type;

        // Card title
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = product.title;

        // Card text
        const cardText = document.createElement('p');
        cardText.className = 'card-text flex-grow-1'; // flex-grow-1 to push the link to the bottom
        cardText.textContent = product.description;
        cardText.style.color = 'lightgrey'; 

        // Append all elements
        cardBody.appendChild(typeLabel); 
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    mainContentDiv.appendChild(row);
}

document.addEventListener('DOMContentLoaded', injectProductPageContent);

// Function to inject content into the services page
function injectServicesPageContent() {
    // HTML string for the services page content, structured with Bootstrap classes for layout
    const servicesContentHTML = `
      <div class="container mt-5">
          <h2>Professional Services</h2>
          <div class="row">
              <div class="col-md-4">
                  <h3>Custom Programming</h3>
                  <i class="bi bi-braces" style="font-size: 2rem;"></i>
                  <p style="color: lightgray;">Skilled in blockchain technologies, offering custom programming services with expertise in Solidity and smart contract development.</p>
                  <a href="https://www.canva.com/design/DAF7rfJZGaw/vB3UJT4gZaijvG9BZmyXnQ/view?utm_content=DAF7rfJZGaw&utm_campaign=designshare&utm_medium=link&utm_source=editor" class="btn btn-primary">View Resume</a>
              </div>
              <div class="col-md-4">
                  <h3>Web Design</h3>
                  <i class="bi bi-vector-pen" style="font-size: 2rem;"></i>
                  <p style="color: lightgray;">Proven track record in creating intuitive web designs, with a focus on UX/UI principles and conversion optimization.</p>
                  <a href="https://www.canva.com/design/DAF7rfJZGaw/vB3UJT4gZaijvG9BZmyXnQ/view?utm_content=DAF7rfJZGaw&utm_campaign=designshare&utm_medium=link&utm_source=editor" class="btn btn-primary">View Resume</a>
              </div>
              <div class="col-md-4">
                  <h3>Mobile Development</h3>
                  <i class="bi bi-phone" style="font-size: 2rem;"></i>
                  <p style="color: lightgray;">Experienced in developing native and hybrid mobile applications for diverse industries, emphasizing agile methodologies.</p>
                  <a href="https://www.canva.com/design/DAF7rfJZGaw/vB3UJT4gZaijvG9BZmyXnQ/view?utm_content=DAF7rfJZGaw&utm_campaign=designshare&utm_medium=link&utm_source=editor" class="btn btn-primary">View Resume</a>
              </div>
          </div>
      </div>
    `;
    // Inject the services content into the main content area by setting its innerHTML
    document.getElementById('main-content').innerHTML = servicesContentHTML;
  }

// Function to inject content into the about us page  
function injectAboutUsContent()  {
    // Initialize a div to hold the about us content, using Bootstrap classes for alignment and spacing
    const mainContentDiv = document.getElementById('about-content');
    mainContentDiv.innerHTML = ''; // Clear existing content

    const row = document.createElement('div');
    row.className = 'row justify-content-center'; // Updated to center the content
    
    // Array containing about us information to display
    const abouts = [
        {
            type: "About",
            title: "Me",
            imagePath: "images/me1.png",
            description: "With a career spanning several years, I have honed my expertise in IT and software development, blockchain technology and database management. My journey began with a fascination for computers and has since evolved into a profession where innovation and problem-solving are daily pursuits. I am proficient in a multitude of programming languages and have a track record of developing robust mobile and web applications that cater to the specific needs of my clients. My commitment goes beyond just writing code; it's about building solutions that make a tangible difference. Let's connect to explore how my skills can help achieve your project's goals."
        }   // Detailed description continues
    ];
    
    // Iterate over the abouts array to create and append elements for each section
    abouts.forEach(about => {
        const col = document.createElement('div');
        col.className = 'col-md-6 mb-4'; // Adjusted for a single product to be centered

        const card = document.createElement('div');
        card.className = 'card d-flex flex-column align-items-center'; // Flex classes for alignment
        card.style.width = 'fit-content'; // card width to fit the content
        card.style.backgroundColor = '#343a40'; 

        const img = document.createElement('img');
        img.className = 'card-img-top img-fluid';
        img.src = about.imagePath;
        img.alt = about.title;
        img.style.width = '30%';
        img.style.height = 'auto'; 
        img.style.borderRadius = '15%'; // Circular shape
        img.style.objectFit = 'cover'; // Ensures the image covers the area without stretching
        img.style.objectPosition = 'center'; // Centers the image within the circular shape

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column'; // Flex classes to align items to the bottom

        const typeLabel = document.createElement('h6');
        typeLabel.className = 'text-uppercase fw-bold mb-2';
        typeLabel.textContent = about.type;

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = about.title;

        const cardText = document.createElement('p');
        cardText.className = 'card-text flex-grow-1'; // Flex-grow-1 to push the link to the bottom
        cardText.textContent = about.description;
        cardText.style.color = 'lightgrey'; 

        cardBody.appendChild(typeLabel);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    mainContentDiv.appendChild(row);
}
// Append the completed row to the main content div
document.addEventListener('DOMContentLoaded', injectAboutUsContent);

// Function to set up the contact form, including form submission handling
function setupContactForm() {
    // Select the contact form by its ID
    const form = document.getElementById('contactForm');
    if (form) {
        // Add an event listener to handle form submission
        form.addEventListener('submit', event => {
            event.preventDefault(); // Prevent the default form submission

            // Retrieve form data and log to console
            const formData = new FormData(form);
            console.log('Contact Form Submission:');
            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            // Display a success message
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Thank you for your message! We will be in touch soon.';
            successMessage.className = 'alert alert-success'; // Bootstrap success alert class
            form.appendChild(successMessage);

            // Simulate form processing delay and redirect
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000); // Delay set to 3 seconds
        });
    }
}

document.addEventListener('DOMContentLoaded', setupContactForm);

// Function to add a fixed bottom navbar to the page
function addFixedBottomNavbar() {
    // Get the current year, which will be displayed in the copyright notice
    const currentYear = new Date().getFullYear();
    // HTML string for the fixed bottom navbar
    const bottomNavbarHTML = `
        <nav class="navbar fixed-bottom navbar-dark white">
            <div class="container-fluid-1">
                <div class="navbar-text">
                    &copy; ${currentYear} - Talent Nyota. All Rights Reserved.
                    <div class="social-links">
                        <!-- Facebook Icon -->
                        <a href="https://www.facebook.com/your-facebook-page" target="_blank" aria-label="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <!-- Twitter Icon -->
                        <a href="https://twitter.com/your-twitter-handle" target="_blank" aria-label="Twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    `;
    // Insert the bottom navbar HTML just before the closing </body> tag, making it appear at the bottom of the page
    document.body.insertAdjacentHTML('beforeend', bottomNavbarHTML);
}
document.addEventListener('DOMContentLoaded', addFixedBottomNavbar);

// Function to change "Products" navbar link text to "Interests"
function changeProductsToInterests() {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        // Check if the text includes 'Products'
        if (link.textContent.trim() === 'Products') {
            // Preserve the inner <i> element and change only the text
            const iconHtml = link.innerHTML.match(/<i[^>]*>.*?<\/i>/i)[0]; // Extracts the icon HTML if present
            link.innerHTML = iconHtml + ' Interests'; // Combines the icon HTML with the new link text
        }
        
    });
}

// Function to add a "Human Resources" link to the main navbar
function addHumanResourcesLink() {
    // Select the navbar list where the new link will be added
    const navbar = document.querySelector('.navbar-nav');
    // HTML string for the new "Human Resources" link
    const hrLinkHTML = `
        <li class="nav-item">
            <a class="nav-link" href="#">
                <i class="fas fa-users"></i> Human Resources
            </a>
        </li>
    `;
    // Insert the new link HTML into the navbar, at the end of the list
    navbar.insertAdjacentHTML('beforeend', hrLinkHTML);
}


<<<<<<< HEAD

=======
/**
 * Registration and Login Functionality
 */

// User class definition
class User {
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

// Document ready function to handle form submissions
$(document).ready(function() {
    // Handle login form submission
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const username = $('#loginUsername').val();
        // Place logic here to handle user login, e.g. checking credentials and handling sessions

        // For demonstration purposes, this code assumes login is successful
        // Insert username in navbar
        // You should replace 'username' with the ID or class of the actual element in your HTML
        $('<span class="navbar-text">' + username + '</span>').insertBefore('#loginLogoutLink');
    });

    // Handle register form submission
    $('#registerForm').submit(function(e) {
        e.preventDefault();
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        let errorMessage = '';

        // Validate First and Last Name
        if (firstName.length < 2 || lastName.length < 2) {
            errorMessage += 'First and Last Name must be at least 2 characters. ';
        }

        // Validate Email
        if (email.length < 8 || !email.includes('@')) {
            errorMessage += 'Email must be at least 8 characters long and contain an @ symbol. ';
        }

        // Validate Password
        if (password.length < 6) {
            errorMessage += 'Password must be at least 6 characters long. ';
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            errorMessage += 'Passwords do not match. ';
        }

        // Display error message if any validation fails
        if (errorMessage) {
            $('#ErrorMessage').show().text(errorMessage);
        } else {
            $('#ErrorMessage').hide();
            const user = new User(firstName, lastName, email.split('@')[0], email, password);
            console.log(user);
            $('#registerForm').trigger('reset'); // Clear form after successful registration
        }
    });
});
>>>>>>> 99e0f4857e6d0b661ed3513f57b25858e5cd2ffe
