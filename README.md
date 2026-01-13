# AllMyProfits Website

A modern, professional single-page website showcasing software consultancy services.

## Features

- **Single-page design**: Smooth-scrolling sections for better user experience
- **Professional layout**: Inspired by Modus Create with navy/cyan color scheme
- **Fixed navigation**: Always-visible header with About, Services, Why Us, Blog, Get Started
- **About section**: Company story and core values
- **Services showcase**: Individual, Company, and Enterprise solutions
- **Stats section**: Value created, products launched, users engaged
- **Blog section**: Latest insights and industry updates
- **Contact form**: Easy way for clients to reach out
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

- **Colors**: Edit `styles.css` `:root` section variables
- **Content**: Update sections in `index.html`
- **Services**: Modify service cards and tech stack
- **About**: Edit company story and values
- **Blog**: Add new posts as shown above
- **Contact**: Update contact form and email

## Technologies

- Pure HTML5, CSS3, JavaScript
- No frameworks required
- Google Fonts (Inter)
- GitHub Pages (Free hosting)
- Professional navy/cyan color scheme
