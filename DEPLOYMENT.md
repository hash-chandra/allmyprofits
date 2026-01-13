# Deployment Guide for allmyprofits.com

## ✅ Completed Steps:
1. ✅ Created beautiful split-screen website
2. ✅ Initialized Git repository
3. ✅ Pushed to GitHub: https://github.com/hash-chandra/allmyprofits

## 🚀 Next Steps to Go Live:

### Step 1: Enable GitHub Pages
1. Visit: https://github.com/hash-chandra/allmyprofits/settings/pages
2. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: **main** / (root)
   - Click **Save**
3. Wait 2-3 minutes for deployment
4. Your site will be live at: https://hash-chandra.github.io/allmyprofits/

### Step 2: Configure Custom Domain in GitHub
1. Still in Settings → Pages
2. Under "Custom domain", enter: `allmyprofits.com`
3. Click **Save**
4. Wait for DNS check to complete
5. Once verified, check **Enforce HTTPS**

### Step 3: Update GoDaddy DNS Settings
1. Log in to GoDaddy: https://dcc.godaddy.com/
2. Go to: My Products → Domains
3. Find "allmyprofits.com" and click **DNS**
4. Make these changes:

#### Delete existing A records (if any)

#### Add 4 new A records for apex domain:
| Type | Name | Value           | TTL  |
|------|------|-----------------|------|
| A    | @    | 185.199.108.153 | 600  |
| A    | @    | 185.199.109.153 | 600  |
| A    | @    | 185.199.110.153 | 600  |
| A    | @    | 185.199.111.153 | 600  |

#### Add CNAME record for www subdomain:
| Type  | Name | Value                   | TTL  |
|-------|------|-------------------------|------|
| CNAME | www  | hash-chandra.github.io  | 600  |

5. Click **Save**

### Step 4: Wait for DNS Propagation
- DNS changes can take 5 minutes to 48 hours
- Usually works within 30 minutes
- Check status: https://www.whatsmydns.net/#A/allmyprofits.com

### Step 5: Verify HTTPS Certificate
1. Once DNS propagates, GitHub will automatically issue SSL certificate
2. Go back to GitHub Pages settings
3. Check **Enforce HTTPS**
4. Your site will be live at: **https://allmyprofits.com** 🎉

## 📝 Important Notes:

### Admin Blog Access:
- Click "Admin Access" button (bottom right)
- Password: `admin123`
- **IMPORTANT**: Change this password in `script.js` for security!

### To Update Your Website:
```bash
# Make your changes to the files
git add .
git commit -m "Your update message"
git push
```

Changes will be live within 1-2 minutes!

## 🎨 Customization:

### Change Colors:
Edit `styles.css` → `:root` section

### Update Content:
Edit `index.html`

### Change Admin Password:
Edit `script.js` → `adminPassword` variable

### Add More Blog Posts:
Use the admin panel on your live site!

## 💰 Cost: 
**$0 - Completely FREE!**
- Domain: Already paid (GoDaddy)
- Hosting: FREE (GitHub Pages)
- SSL/HTTPS: FREE (GitHub)
- Unlimited bandwidth

## 📞 Need Help?
If DNS doesn't propagate or you need help, just ask!
