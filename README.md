# 🏦 Bankist — Marketing Website

A responsive landing page for the fictional Bankist bank, built with vanilla JavaScript and packed with modern DOM techniques: smooth scrolling, a sticky navigation, reveal-on-scroll sections, lazy-loaded images and a slider.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**🔗 Live demo:** [https://prasad-bankist-web.netlify.app/](#)

---

## ✨ Features

- **Smooth scrolling** to sections using event delegation on the navigation
- **Sticky navigation** that appears once the header scrolls out of view (Intersection Observer API)
- **Menu fade animation** — other links fade out when you hover one (only on devices that support hover)
- **Reveal-on-scroll** — sections slide in as they enter the viewport
- **Lazy-loaded images** — low-resolution placeholders are swapped for full images when visible
- **Tabbed component** for the "Operations" section, with a layout that adapts to small screens
- **Testimonial slider** with arrow buttons, dots and keyboard (← →) navigation
- **"Open account" modal** that closes with the × button, the overlay or the Esc key
- **Mobile menu** — a slide-in sidebar navigation on small screens
- **Fully responsive** layout

---

## 🧠 What I Practised

- Event delegation and event propagation
- The **Intersection Observer API** (sticky nav, reveal sections, lazy loading)
- `matchMedia` to adapt behaviour to screen size and hover capability
- DOM traversal and building components (tabs, slider, modal) from scratch

---

## 🛠️ Tech Stack

- **HTML5** — structure
- **CSS3** — styling, animations and media queries
- **JavaScript (ES6+)** — interactivity and DOM APIs

---

## 🚀 Getting Started

No installation needed.

```bash
git clone https://github.com/prasad-k-s/Bankist-Website.git
cd Bankist-Website
```

Then open `index.html` in your browser.

---

## 📂 Project Structure

```
Bankist-Website/
├── index.html
├── style.css
├── script.js
└── img/          # Images, including low-res versions for lazy loading
```

---

## 🙏 Credits

The base project comes from [Jonas Schmedtmann's](https://twitter.com/jonasschmedtman) _The Complete JavaScript Course_. I extended it with a mobile sidebar menu and a responsive tabbed component.
