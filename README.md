🎨 TeeCraft – 3D T-Shirt Customization App

An interactive and immersive 3D web application that allows users to personalize T-shirts in real time using modern frontend technologies and WebGL-based rendering.

TeeCraft combines creativity with real-time 3D graphics to simulate an industry-style apparel customization platform directly inside the browser.

🌟 Key Features

Interactive 3D T-shirt model with smooth rotation

Real-time color customization with instant material updates

Upload custom images in:

Logo Mode (front placement)

Full Texture Mode (entire shirt design)

Dynamic texture mapping applied directly to 3D mesh

State-driven UI updates using React architecture

Responsive layout optimized for multiple screen sizes

Modular and reusable component-based structure

Fast development workflow powered by Vite

Clean and modern UI using Tailwind CSS

🧠 Why This Project

Most online T-shirt customization platforms rely on static 2D previews, limiting interaction and visualization accuracy.

This project was built to:

Provide a real-time 3D alternative to traditional 2D product previews

Demonstrate practical implementation of WebGL rendering

Strengthen understanding of React state management in 3D environments

Practice mesh manipulation and dynamic material updates

Build a portfolio-ready immersive frontend project

Create a scalable base for AI-powered design systems and AR integration

🛠️ Tech Stack

Node.js – Development runtime

React.js – Component-based UI framework

Three.js – 3D rendering engine

React Three Fiber – React renderer for Three.js

React Three Drei – Utility helpers for 3D scenes

Vite – Development build tool

Tailwind CSS – Utility-first styling framework

⚙️ How It Works

The 3D T-shirt model is loaded into a WebGL canvas using React Three Fiber.

Three.js manages mesh rendering, lighting, camera setup, and material updates.

User interactions (color picker, file upload, toggle modes) update the global state.

React state triggers real-time updates on the 3D mesh material.

Uploaded textures are dynamically mapped onto the model surface.

The rendering pipeline updates instantly without page reload.

🎨 Customization Options

Users can:

Change T-shirt color in real time

Upload custom images

Switch between logo-only mode and full-texture mode

Rotate and inspect the 3D model interactively

⚡ Quick Start
🔧 Prerequisites

Git

Node.js (v16 or higher)

npm

📥 Installation
# Clone the repository
git clone https://github.com/your-username/teecraft.git

# Navigate into the project folder
cd teecraft

# Install dependencies
npm install

# Start development server
npm run dev

📂 Project Structure
src/
 ├── components/     # UI components (color picker, file upload, controls)
 ├── canvas/         # 3D scene and rendering logic
 ├── assets/         # Models, textures, and static files
 └── App.jsx         # Main application entry point

⚠️ Limitations

Frontend-only project (no backend integration yet)

No user authentication or saved designs

No checkout or e-commerce functionality

Performance may vary on low-end devices

🚀 Future Enhancements

AI-powered design suggestions

AR-based virtual try-on

Backend integration for product ordering

User accounts & saved custom designs

Export customized design as an image

Performance optimization and lazy loading

Dark / Light theme toggle

🔗 Live Demo

(Add your deployed link here)

👩‍💻 Author

Deepika Yadav
