# AllMyProfits Website

A modern, split-screen website showcasing software consultancy services and a blog.

## Features

- **Split-screen design**: Consultancy services on the left, blog on the right
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Admin blog posting**: Add new blog posts through a password-protected interface
- **Modern UI**: Gradients, animations, and clean design
- **Contact form**: Easy way for clients to reach out

## Admin Access

To add new blog posts:
1. Click the "Admin Access" button (bottom right)
2. Enter password: `admin123` (change this in script.js)
3. Fill in the blog post form and publish

## Local Development

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit: http://localhost:8000

## Deployment to GitHub Pages

See the deployment instructions in the root README.

## Customization

- Edit colors in `styles.css` (`:root` section)
- Change admin password in `script.js`
- Update service information in `index.html`
- Add your own content and blog posts

## Technologies

- Pure HTML5, CSS3, JavaScript
- No frameworks required
- Google Fonts (Inter)
- LocalStorage for blog persistence
