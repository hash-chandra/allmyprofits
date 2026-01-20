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
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Rate limiting check
            const now = Date.now();
            if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
                const remainingTime = Math.ceil((SUBMIT_COOLDOWN - (now - lastSubmitTime)) / 1000);
                alert(`⏳ Please wait ${remainingTime} seconds before submitting again.`);
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
                alert('⚠️ Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            if (!emailPattern.test(data.email)) {
                alert('⚠️ Please enter a valid email address.');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '⏳ Sending...';
            submitBtn.disabled = true;
            
            try {
                // Send to Formspree
                const response = await fetch('https://formspree.io/f/mjggewlg', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: data.name,
                        email: data.email,
                        company: data.company || 'Not provided',
                        project_type: data.project_type,
                        message: data.message,
                        _subject: `New inquiry from ${data.name} - ${data.project_type}`,
                        _replyto: data.email
                    })
                });
                
                if (response.ok) {
                    alert('✅ Thank you! We\'ll get back to you within 24 hours.');
                    this.reset();
                    lastSubmitTime = now;
                } else {
                    const errorData = await response.json();
                    console.error('Formspree error:', errorData);
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                alert('❌ Unable to send message. Please email us directly at contact@allmyprofits.com');
            } finally {
                // Reset button state
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});
