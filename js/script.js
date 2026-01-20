// Smooth scroll functionality
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function scrollToBlog() {
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
}

// Blog posts are managed directly in the HTML

// Contact form submission with rate limiting and validation
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    let lastSubmitTime = 0;
    const SUBMIT_COOLDOWN = 5000; // 5 seconds between submissions
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Rate limiting check
            const now = Date.now();
            if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
                const remainingTime = Math.ceil((SUBMIT_COOLDOWN - (now - lastSubmitTime)) / 1000);
                alert(`Please wait ${remainingTime} seconds before submitting again.`);
                return;
            }
            
            // Basic sanitization
            const formData = new FormData(this);
            const data = {};
            for (let [key, value] of formData.entries()) {
                // Trim whitespace and limit length
                data[key] = String(value).trim().substring(0, 5000);
            }
            
            // Validate required fields
            if (!data.name || !data.email || !data.message || !data.project_type) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            if (!emailPattern.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Update last submit time
            lastSubmitTime = now;
            
            // TODO: Send to backend or form service
            // Example: FormSpree, EmailJS, Web3Forms, etc.
            // fetch('YOUR_FORM_ENDPOINT', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });
            
            // For now, show success message
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        });
    }
});
