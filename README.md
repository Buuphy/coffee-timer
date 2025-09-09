# ☕ Coffee Timer

A modern, minimalistic **coffee cup timer for productivity**.  
Instead of a regular countdown, the timer is visualized as a coffee cup that slowly empties over your chosen focus session.  

The app also includes **basic analytics** — tracking your session history, showing daily usage in bar charts, and weekly productivity comparisons.

---

## ✨ Features
- ⏳ Coffee cup visualization that empties as your session progresses  
- 🎯 Preset focus durations (5, 15, 25, 45 minutes)  
- 📊 Analytics panel with daily bars + weekly progress tracking (5-week history)  
- 🌙 Clean, minimal UI with optional focus mode (sidebar hides)  
- 💾 Local storage persistence for sessions  
- 📱 Responsive design (desktop + mobile)

---

## 🛠️ Technologies Used
- **[React 18](https://react.dev/)** — component-based UI  
- **[Vite](https://vitejs.dev/)** — fast dev server + build tool  
- **JavaScript (ESNext)**  
- **CSS (modern variables, flex/grid)** — minimal styling without heavy frameworks  
- **LocalStorage API** — saves focus sessions on the client  
- **Custom React Hooks** — handles timer countdown logic  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/coffee-timer.git
cd coffee-timer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```

Now open the app in your browser at:  
👉 [http://localhost:5173](http://localhost:5173)

---

## 📦 Building for production
```bash
npm run build
```
This will output optimized static assets into the `dist/` folder, ready to be deployed.

Preview the production build locally:
```bash
npm run preview
```

---

## 📂 Project Structure
```
coffee-timer/
├─ package.json
├─ vite.config.js
├─ index.html
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ styles.css
│  ├─ components/
│  │  ├─ Sidebar.jsx
│  │  ├─ CoffeeCup.jsx
│  │  ├─ Analytics.jsx
│  │  └─ PresetButton.jsx
│  ├─ hooks/
│  │  └─ useTimer.js
│  ├─ services/
│  │  └─ storage.js
│  └─ utils/
│     └─ date.js
└─ public/
```

---

## 🧩 Contributing
Pull requests are welcome! If you’d like to suggest new features (e.g., advanced analytics, notifications, themes), open an issue first to discuss.

---

## 📄 License
MIT License © 2025
