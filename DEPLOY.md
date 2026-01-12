# Deployment

This portfolio is a static site built with Vite + React and can be deployed to Vercel, Netlify, or GitHub Pages.

- **Vercel**: Connect your GitHub repository to Vercel and it will auto-deploy on push. Use the build command `npm run build` (Vite default) and publish directory `dist`.
- **Netlify**: Connect the repo and set build command `npm run build` with publish directory `dist`, or drag-and-drop the `dist` folder for a manual deploy.
- **GitHub Pages**: Use GitHub Actions or the `gh-pages` branch to publish; note that Vercel/Netlify are easier for modern SPAs.

Tip: replace `https://your-portfolio.example.com` in `index.html` Open Graph meta tags for correct social previews.