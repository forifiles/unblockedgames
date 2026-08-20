# Recess Lab Premium

A fast, lightweight, and modern static web portal to play 250+ premium unblocked HTML5, Unity, and Scratch games. The application is completely client-side and optimized for school or work environments with zero downloads or local installation required.

## 🚀 Live Hosting & Deployment

Since this project consists of purely static assets (`index.html`, `index.css`, `app.js`, and the `thumbnails/` folder), it is extremely easy to host online. 

You can host it on any static web hosting provider:
- **Vercel / Netlify**: Simply link your Git repository or drag-and-drop the project folder to deploy.
- **GitHub Pages**: Go to your repository settings -> Pages, select the root branch, and set it to deploy from the root.
- **Cloudflare Pages**: Link your Git repository and deploy.
- **Surge.sh / GitHub Actions**: Configure standard static deployment workflows.

---

## 🛠️ Getting Started Locally

To view the website on your local machine:
1. **Option A (Double-click)**: Simply double-click `index.html` to open it in your favorite web browser.
2. **Option B (Recommended - Local Web Server)**: Run a simple HTTP server in the root directory to avoid CORS/origin issues when loading external resources:
   - **Using Python (3.x)**:
     ```bash
     python -m http.server 8080
     ```
     Then open `http://localhost:8080` in your browser.
   - **Using Node.js (http-server)**:
     ```bash
     npx http-server -p 8080
     ```
     Then open `http://localhost:8080` in your browser.

---

## 📂 Project Structure

```text
├── index.html          # Main HTML web page containing the viewport and page structures
├── index.css           # Custom stylesheets (Dark & Light theme styles, responsive grid layout)
├── app.js              # Frontend game database (GAMES array) and DOM interaction logic
├── thumbnails/         # Game thumbnail assets organized by categories (Car, io, Classic, etc.)
│   ├── 2 player/
│   ├── car/
│   ├── shooting/
│   └── ... (other categories)
├── .gitignore          # Rules for ignoring non-deployment and dev utility files
└── README.md           # Project documentation (this file)
```
