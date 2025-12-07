# Cube27 — AI Consulting Website (Next.js 14 + App Router + Tailwind + next-themes)

A modern, enterprise-grade AI consulting website built using:
- **Next.js 14 App Router**
- **React Server Components**
- **Tailwind CSS**
- **Glass UI**
- **Dark/Light theming (next-themes)**
- **Particles + Parallax Orbs**
- **Server Actions + API Routes**
- **AI demo backend (OpenAI-ready)**

This project is optimized for:
- High-performance landing pages  
- Smooth animations & interactions  
- Enterprise-style UI  
- Clean architecture for long-term scalability  
- Real backend logic for AI/chat demos & contact handling  

---

## 🔧 Tech Stack

### Frontend
- Next.js 14 (App Router)
- React Server Components (RSC)
- Tailwind CSS
- next-themes
- Custom animations (Fade-up, Particles, Parallax Orbs)
- Glassmorphism UI

### Backend
- Next.js Route Handlers
- Server Actions
- OpenAI-ready backend endpoint (`/api/ai-demo`)
- Contact form API (`/api/contact`)

---

## 📁 Project Structure

```
cube27-next/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── api/
│   │   ├── contact/route.ts
│   │   └── ai-demo/route.ts
│   │
│   ├── actions/
│   │   ├── contactAction.ts
│   │   └── aiAction.ts
│   │
│   ├── theme/providers.tsx
│   │
│   └── components/
│       ├── navbar/NavBar.tsx
│       ├── hero/Hero.tsx
│       ├── hero/HeroDevice.tsx
│       ├── hero/HeroStats.tsx
│       ├── particles/ParticlesCanvas.tsx
│       ├── particles/useParticles.ts
│       ├── orbs/Orbs.tsx
│       ├── animations/useScrollReveal.ts
│       ├── animations/ScrollReveal.tsx
│       ├── cards/GlassCard.tsx
│       ├── sections/Solutions.tsx
│       ├── sections/Framework.tsx
│       ├── sections/Industries.tsx
│       └── sections/Contact.tsx
│
├── public/
│   ├── favicon.ico
│   ├── logo.png (optional)
│   └── orb-texture.png (optional)
│
├── package.json
├── next.config.mjs
├── tailwind.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add environment variables
Create a `.env.local` file:

```
OPENAI_API_KEY=your_key_here
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

### 5. Start production server
```bash
npm start
```

---

## ✨ Features

### ✔ Animated Hero  
- Parallax glow orbs  
- Glass chat device simulation  
- On-scroll fade animations  
- Responsive grid  

### ✔ Beautiful Glass UI  
- Cards  
- Panels  
- Forms  
- Metric pills  

### ✔ Light/Dark Theme  
- next-themes  
- Smooth transitions  
- Auto system theme detection  

### ✔ Particle Canvas  
- Canvas particles  
- Glow blending  
- Performance optimized  

### ✔ Backend Integrations  
- **/api/contact**  
- **/api/ai-demo**  
- Server Actions alternative  

---

## 🛠 Customization

### Updating colors  
Modify CSS variables in `app/globals.css`:

```css
--accent-primary: #2563eb;
--accent-secondary: #a855f7;
--accent-hot: #ec4899;
```

### Updating animations  
Particles → `useParticles.ts`  
Orbs → `Orbs.tsx`  
Scroll reveal → `useScrollReveal.ts`

---

## 📄 License

This project is proprietary and owned by **Cube27**.

---

## 📬 Contact

For questions, reach out at:  
**hello@cube27.com**

