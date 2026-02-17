🎨 TeeCraft – 3D T-Shirt Customization App

An interactive and immersive 3D web application that allows users to personalize T-shirts in real time using modern frontend technologies and WebGL-based rendering.

TeeCraft combines creativity with real-time 3D graphics to simulate an industry-style apparel customization platform directly inside the browser.

🌟 Key Features

Interactive 3D T-shirt model with smooth rotation

Real-time color customization with instant material updates

Upload custom images as:

Logo Mode (small front placement)

Full Texture Mode (entire shirt design)

Dynamic texture mapping applied directly to 3D mesh

State-driven UI updates using React architecture

Responsive layout optimized for different screen sizes

Modular and reusable component-based structure

Fast development workflow powered by Vite

Clean and modern UI using Tailwind CSS

🧠 Why This Project

Most online T-shirt customization platforms rely on static 2D previews, which limit user interaction and visualization accuracy.

This project was built to:

Provide a real-time 3D alternative to traditional 2D product previews

Demonstrate practical implementation of WebGL rendering

Strengthen understanding of React state management in 3D environments

Practice mesh manipulation and dynamic material updates

Build a portfolio-ready immersive frontend project

Create a foundation for AI-powered design systems and AR integration

🛠️ Tech Stack

Node.js – Development runtime

React.js – Component-based UI framework

Three.js – Core 3D rendering engine

React Three Fiber – React renderer for Three.js

React Three Drei – Utility helpers for 3D scenes

Vite – Fast build and dev server

Tailwind CSS – Utility-first styling framework

⚙️ How It Works

The 3D T-shirt model is loaded into a WebGL canvas using React Three Fiber.

Three.js handles mesh rendering, lighting, camera setup, and material updates.

User interactions (color picker, file upload, toggle mode) update the global state.

React state triggers real-time updates on the 3D mesh material.

Texture uploads are dynamically mapped onto the model surface.

The rendering pipeline updates instantly without page reload.

🧾 Customization Options

Users can:

Change T-shirt color in real time

Upload custom images

Switch between logo-only mode and full-texture mode

Rotate and inspect the model interactively

📂 Project Structure
src/
 ├── components/     # UI components (color picker, file upload, controls)
 ├── canvas/         # 3D scene setup and rendering logic
 ├── assets/         # Models, textures, and images
 └── App.jsx         # Main application entry point

⚠️ Limitations

Frontend-only project (no backend integration yet)

No user authentication or saved designs

No e-commerce checkout system

Performance may vary on low-end devices

🚀 Future Enhancements

AI-powered design suggestions

AR-based virtual try-on integration

Backend integration for product ordering

User accounts & saved custom designs

Export customized design as image

Performance optimization using lazy loading

Dark / Light theme support

🔗 Live Demo

(Add your deployed link here once hosted)

👩‍💻 Author

Deepika Yadav
B.Tech CSE | Frontend & 3D Web Enthusiast
