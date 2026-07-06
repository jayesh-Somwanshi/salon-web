# Pooja Birhade Salon Vapi Website

A highly professional, premium, and fully responsive website designed for **Pooja Birhade**, a female makeup artist and salon owner based in Vapi. The styling incorporates a curated color palette (champagne, rose gold, charcoal) with custom transitions, tabbed services sheets, a filterable gallery, customer reviews, a contact form, and WhatsApp shortcuts.

## Project Structure
- `index.html`: Core structure, section divisions, headings, and semantic tags.
- `styles.css`: Embedded fonts, layout system, styling properties, and animations.
- `script.js`: Interactivity for header navigation, burger toggles, category filtering, and modal popups.
- `images/`: High-resolution visual assets.
  - `salon_interior.png`: Elegant salon interior view.
  - `makeup_artistry.png`: Close-up glam portrait.
  - `bridal_makeup.png`: Traditional heavy Indian bridal glam portrait.
  - `hairstyle_detail.png`: Detailed view of a gorgeous bridal updo.
  - `action_makeup.png`: Action makeup session shot.
  - `action_hair.png`: Client styling session action shot.

---

## How to Run This Project

Since this is a lightweight **pure frontend website** (HTML, CSS, and JS), it does not have a compile/build step nor does it rely on npm scripts like `npm run dev`. You can run it instantly using any of the options below:

### Option 1: Direct File Launch (Easiest)
Locate the project folder inside your file manager and double-click the **`index.html`** file. It will open directly in any web browser (Chrome, Firefox, Edge, etc.).

### Option 2: Live Server with Node.js (`npx`)
If you have Node.js installed, you can spin up a local development web server:
1. Open a terminal in the project directory (`/home/dev143/Pictures/Salon`).
2. Run either of these commands:
   ```bash
   npx serve
   # OR
   npx live-server
   ```
3. Open your browser and navigate to the address showing in your terminal (typically `http://localhost:3000` or `http://localhost:8080`).

### Option 3: Local Server with Python (Pre-installed on Linux)
Because Python is natively available on Linux systems, this is a clean way to spin it up:
1. Open your terminal in the directory:
   ```bash
   cd /home/dev143/Pictures/Salon
   ```
2. Launch the integrated HTTP server:
   ```bash
   python3 -m http.server 8080
   ```
3. Open your browser and go to: **[http://localhost:8080](http://localhost:8080)**.
