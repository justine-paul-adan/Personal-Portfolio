# Personal Portfolio Template

A modern, responsive portfolio website template built with React. Inspired by helloalmaz.com design patterns.

## 🎨 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Customization**: Simple template data structure for quick updates
- **Multiple Sections**:
  - Navigation bar with mobile menu
  - Hero section with introduction
  - Skills showcase
  - Projects/Works gallery
  - Client testimonials
  - Contact footer

## 📋 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── HeroSection/
│   ├── Skills/
│   ├── Projects/
│   ├── Testimonials/
│   └── Footer/
├── data/
│   └── templateData.js (YOUR PROFILE DATA)
└── App.js
```

## 🚀 Getting Started

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## ✏️ How to Customize

### Edit Your Profile Information

Open `src/data/templateData.js` and update the following:

```javascript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  
  // ... update skills, projects, testimonials, education
};
```

### Customize Colors

Edit the CSS files in each component folder to change the color scheme. Default colors:
- Primary Gradient: `#667eea` to `#764ba2` (purple)
- Modify the `background` property in:
  - `Navbar.css`
  - `HeroSection.css`
  - Component-specific hover states

### Replace Profile Image

In `HeroSection/HeroSection.js`, replace the placeholder emoji with your image:

```javascript
// Change this:
<div className="profile-placeholder">👨‍💻</div>

// To this:
<img src="/your-image.jpg" alt="Profile" className="profile-placeholder" />
```

### Update Social Links

Edit the `portfolioData` object in `templateData.js` with your actual social media URLs.

## 📱 Sections Breakdown

### Navbar
- Sticky navigation with smooth scrolling
- Mobile hamburger menu
- Quick navigation links

### Hero Section
- Large introduction area
- Call-to-action buttons
- Social media links

### Skills
- Showcase technical skills and technologies
- Grid layout with hover effects
- Easy to add/remove skills

### Projects
- Display your portfolio projects
- Include project description, tags, and links
- Responsive grid layout

### Testimonials
- Display client feedback
- Star ratings
- Client company information

### Footer
- Contact information
- Social media links
- Quick navigation
- Copyright information

## 🎯 Next Steps

1. ✅ Update all information in `templateData.js`
2. ✅ Add project descriptions and links
3. ✅ Include client testimonials
4. ✅ Customize colors and styling
5. ✅ Add your profile image
6. ✅ Deploy to hosting (Netlify, Vercel, GitHub Pages, etc.)

## 🛠️ Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - (Be careful with this!)

## 📦 Deployment

### Deploy to Netlify
```bash
npm run build
# Upload the "build" folder to Netlify
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/portfolio"
# Add deploy scripts and push to GitHub
```

## 💡 Tips

- Keep your content concise and impactful
- Use high-quality images (optimize for web)
- Ensure all links are working (especially project demos)
- Test on mobile devices before deploying
- Regularly update with new projects and skills

## 📄 License

Free to use and customize for personal or commercial projects.

---

**Happy coding! 🎉**
