/**
 * blog.js
 * Author: Talent Nyota
 * StudentID: 100761242
 * Date Completed: 2024-03-13
 * Description: This script fetches blog posts and images from external APIs (jsonplaceholder and Pixabay) and displays them
 * on a web page using dynamically created Bootstrap cards. It demonstrates how to use Fetch API for network requests,
 * manipulate the DOM with vanilla JavaScript, and handle asynchronous operations with promises.
 */

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Fetch blog posts from jsonplaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // Parse the JSON response
        .then(posts => {
            // Slice the first 20 posts from the response and iterate over them
            posts.slice(0, 20).forEach(post => {
                // Fetch an image from Pixabay API using the first word of the post's title as the query
                fetch(`https://pixabay.com/api/?key=42862817-e3f6cb6f57e4809145585e0ab&q=${encodeURIComponent(post.title.split(' ')[0])}&image_type=photo`)
                    .then(response => response.json()) // Parse the JSON response
                    .then(data => {
                        // Get the URL of the first image in the response, or use a placeholder image if none is found
                        const imageUrl = data.hits[0]?.webformatURL || 'https://via.placeholder.com/150';
                        
                        // Select the container where the blog posts will be displayed
                        const blogContainer = document.getElementById('blog-container');
                        
                        // Create a new div element for the current post and add the 'card' class for Bootstrap styling
                        const postElement = document.createElement('div');
                        postElement.classList.add('card');
                        
                        // Set the inner HTML of the post element with the image, title, and body of the post
                        postElement.innerHTML = `
                            <img src="${imageUrl}" class="card-img-top" alt="${post.title}">
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text">${post.body}</p>
                            </div>
                        `;
                        
                        // Append the new post element to the container
                        blogContainer.appendChild(postElement);
                    })
                    .catch(error => console.log('Error fetching image:', error)); // Log any errors that occur during the image fetch
            });
        })
        .catch(error => console.log('Error fetching posts:', error)); // Log any errors that occur during the posts fetch
});
