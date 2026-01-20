# AllMyProfits Website

A modern, professional website showcasing software consultancy services.

## Project Structure

```
godaddy/
├── index.html              # Main landing page
├── CNAME                   # Custom domain configuration
├── README.md               # This file
├── DEPLOYMENT.md           # Deployment instructions
├── css/
│   └── styles.css         # All website styles
├── js/
│   └── script.js          # JavaScript functionality
├── images/
│   └── logo.png           # Company logo
└── pages/
    ├── about-us.html      # About Us page
    ├── privacy-policy.html # Privacy Policy
    └── terms-of-service.html # Terms of Service
```

## Features

- **Multi-page design**: Home, About Us, Privacy Policy, Terms of Service
- **Professional layout**: Modern navy/cyan color scheme
- **Fixed navigation**: Always-visible header with About, Services, Why Us, Blog, Contact
- **About section**: Company story and core values
- **Services showcase**: Individual, Company, and Enterprise solutions
- **Stats section**: Value created, products launched, users engaged
- **Blog section**: Latest insights and industry updates
- **Contact form**: Easy way for clients to reach out
- **Legal pages**: Professional Privacy Policy and Terms of Service
- **Responsive**: Works perfectly on desktop, tablet, and mobile

## Adding Blog Posts

Blog posts are managed directly in the HTML code:

1. Edit `index.html`
2. Find the `<div class="blog-posts">` section
3. Add a new article:
   ```html
   <article class="blog-post">
       <div class="post-date">Jan 14, 2026</div>
       <h3 class="post-title">Your Post Title</h3>
       <p class="post-excerpt">Your post excerpt here...</p>
       <a href="#" class="read-more">Read more →</a>
   </article>
   ```
4. Commit and push:
   ```bash
   git add index.html
   git commit -m "Add new blog post"
   git push
   ```

## Local Development

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit: http://localhost:8000

## Live Site

- **Production**: https://allmyprofits.com (HTTPS once certificate is issued)
- **HTTP**: http://allmyprofits.com
- **GitHub Pages**: https://hash-chandra.github.io/allmyprofits/

## Customization

- **Colors**: Edit `css/styles.css` `:root` section variables
- **Home Page**: Update sections in `index.html`
- **About Page**: Edit `pages/about-us.html`
- **Services**: Modify service cards and tech stack in `index.html`
- **Blog**: Add new posts as shown above in `index.html`
- **Contact**: Update contact form in `index.html`
- **Legal**: Edit `pages/privacy-policy.html` or `pages/terms-of-service.html`
- **Styling**: All CSS in `css/styles.css`
- **Scripts**: All JavaScript in `js/script.js`
- **Images**: Store in `images/` folder

## Technologies

- Pure HTML5, CSS3, JavaScript
- No frameworks required
- Google Fonts (Inter)
- GitHub Pages (Free hosting)
- Professional navy/cyan color scheme
- Organized folder structure for scalability
