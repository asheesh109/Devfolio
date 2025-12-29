
# Devfolio

A modern, responsive developer portfolio website built with **Next.js** and **Tailwind CSS**. Showcase your projects, skills, and experience with a clean, professional design.

![Devfolio Preview](https://img.shields.io/badge/status-live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue) ![License](https://img.shields.io/badge/license-MIT-green)

🔗 **Live Demo:** [https://devfolio-two-xi.vercel.app/](https://devfolio-two-xi.vercel.app/)

## ✨ Features

- **🚀 Modern Stack**: Built with Next.js 14 and Tailwind CSS 3.3
- **📱 Fully Responsive**: Optimized for all device sizes
- **⚡ Performance**: Fast loading with optimized images and code splitting
- **🎨 Customizable**: Easy to personalize with your content and styling
- **🔍 SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **🌙 Dark/Light Mode**: Built-in theme toggle (if implemented)
- **📄 Project Showcase**: Dedicated sections for highlighting your work
- **📬 Contact Form**: Integrated contact functionality
- **🔗 Social Integration**: Easy links to your social profiles

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS, CSS Modules
- **Icons**: React Icons / Lucide React
- **Deployment**: Vercel
- **Code Quality**: ESLint, Prettier
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
devfolio/
├── public/
│   ├── images/          # Static images
│   ├── icons/           # Favicons & app icons
│   └── fonts/           # Custom fonts
├── src/
│   ├── app/             # Next.js 14 app router pages
│   ├── components/      # Reusable components
│   │   ├── layout/      # Layout components
│   │   ├── ui/          # UI components
│   │   ├── sections/    # Page sections
│   │   └── shared/      # Shared components
│   ├── lib/             # Utilities & helpers
│   ├── styles/          # Global styles
│   └── constants/       # Constants & configuration
├── .eslintrc.json       # ESLint configuration
├── .gitignore          # Git ignore file
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind configuration
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asheesh109/Devfolio.git
   cd Devfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the result.

## 🎨 Customization

### 1. Update Personal Information
Edit the configuration files in `src/constants/`:
- `personal-info.js` - Your name, title, bio, etc.
- `social-links.js` - Your social media profiles
- `projects.js` - Your portfolio projects
- `skills.js` - Your technical skills
- `experience.js` - Your work experience

### 2. Change Colors & Theme
Modify `tailwind.config.js` to update the color scheme:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
}
```

### 3. Update Images
Replace images in `public/images/`:
- `profile.jpg` - Your profile picture
- `projects/` - Project screenshots
- `backgrounds/` - Background images

### 4. Configure Contact Form
If using a contact form, update the endpoint in your contact component or environment variables.

## 📦 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure build settings
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Other Deployment Options

- **Netlify**: Import repository, build command: `npm run build`, publish directory: `.next`
- **AWS Amplify**: Connect repository, build settings: Next.js preset
- **Self-hosted**: Build with `npm run build`, serve with `npm start`

## 🔧 Build Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier

# Analytics
npm run analyze      # Analyze bundle size
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel](https://vercel.com) for hosting

## 📞 Contact

Ashish Parab - ashishparab03@gmail.com

Project Link: [https://github.com/asheesh109/Devfolio](https://github.com/asheesh109/Devfolio)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ by [Ashish Parab](https://github.com/asheesh109)**

