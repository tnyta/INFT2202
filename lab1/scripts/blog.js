document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.slice(0, 20).forEach(post => {
                fetch(`https://pixabay.com/api/?key=42862817-e3f6cb6f57e4809145585e0ab&q=${encodeURIComponent(post.title.split(' ')[0])}&image_type=photo`)
                    .then(response => response.json())
                    .then(data => {
                        const imageUrl = data.hits[0]?.webformatURL || 'https://via.placeholder.com/150';
                        const blogContainer = document.getElementById('blog-container');
                        const postElement = document.createElement('div');
                        postElement.classList.add('card');
                        postElement.innerHTML = `
                            <img src="${imageUrl}" class="card-img-top" alt="${post.title}">
                            <div class="card-body">
                                <h5 class="card-title">${post.title}</h5>
                                <p class="card-text">${post.body}</p>
                            </div>
                        `;
                        blogContainer.appendChild(postElement);
                    })
                    .catch(error => console.log('Error fetching image:', error));
            });
        })
        .catch(error => console.log('Error fetching posts:', error));
});
