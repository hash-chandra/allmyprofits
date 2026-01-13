// Smooth scroll functionality
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function scrollToBlog() {
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

// Admin panel toggle
let adminPassword = 'admin123'; // Change this to your secure password
let adminAuthenticated = false;

function toggleAdmin() {
    const adminSection = document.getElementById('adminSection');
    
    if (!adminAuthenticated) {
        const password = prompt('Enter admin password:');
        if (password === adminPassword) {
            adminAuthenticated = true;
            adminSection.style.display = 'block';
            alert('Admin access granted! You can now add blog posts.');
        } else {
            alert('Incorrect password!');
        }
    } else {
        adminSection.style.display = adminSection.style.display === 'none' ? 'block' : 'none';
    }
}

// Blog form submission
document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
    
    if (blogForm) {
        blogForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('postTitle').value;
            const content = document.getElementById('postContent').value;
            const today = new Date();
            const dateStr = today.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
            
            // Create new blog post
            const blogPosts = document.getElementById('blogPosts');
            const newPost = document.createElement('article');
            newPost.className = 'blog-post';
            newPost.innerHTML = `
                <div class="post-date">${dateStr}</div>
                <h3 class="post-title">${title}</h3>
                <p class="post-excerpt">${content}</p>
                <a href="#" class="read-more">Read more →</a>
            `;
            
            // Insert at the beginning
            blogPosts.insertBefore(newPost, blogPosts.firstChild);
            
            // Add animation
            newPost.style.opacity = '0';
            newPost.style.transform = 'translateY(20px)';
            setTimeout(() => {
                newPost.style.transition = 'all 0.5s ease-out';
                newPost.style.opacity = '1';
                newPost.style.transform = 'translateY(0)';
            }, 10);
            
            // Clear form
            document.getElementById('postTitle').value = '';
            document.getElementById('postContent').value = '';
            
            // Save to localStorage
            savePost({ title, content, date: dateStr });
            
            alert('Blog post published successfully!');
        });
    }
    
    // Load saved posts from localStorage
    loadSavedPosts();
});

// Save post to localStorage
function savePost(post) {
    let posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    posts.unshift(post);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}

// Load saved posts from localStorage
function loadSavedPosts() {
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    const blogPosts = document.getElementById('blogPosts');
    
    // Only load custom posts (localStorage posts will be at the beginning)
    posts.forEach(post => {
        const newPost = document.createElement('article');
        newPost.className = 'blog-post';
        newPost.innerHTML = `
            <div class="post-date">${post.date}</div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.content}</p>
            <a href="#" class="read-more">Read more →</a>
        `;
        blogPosts.insertBefore(newPost, blogPosts.firstChild);
    });
}

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend
    // For now, we'll just show a success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.reset();
});

// Add scroll reveal animation
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.blog-post');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 50) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});
