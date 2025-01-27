
# Solar System Visualization 🌌

A real-time, interactive 3D visualization of the solar system built using **React Three Fiber**. This project demonstrates the movement of planets, asteroid belts, and Kuiper belts with realistic scaling and textures. It also provides interactive features to explore details about each planet.

---

## Features ✨

- **Realistic Scaling**: Planet sizes, distances, and orbital speeds are scaled to match the solar system.
- **Interactive Exploration**:
  - Hover over a planet to see a brief tooltip.
  - Click on a planet to open a detailed side panel.
- **Asteroid and Kuiper Belts**:
  - Procedurally generated asteroid belts between Mars and Jupiter.
  - Kuiper Belt beyond Neptune for added realism.
- **Dynamic Background**: A space-like starry background to enhance immersion.
- **Optimized Performance**:
  - Instanced rendering for asteroid belts to handle thousands of objects efficiently.
- Fully customizable for additional celestial bodies or features.

---

## Installation 🛠️

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v16 or later)
- **npm** or **yarn**

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/solar-system-visualization.git
   cd solar-system-visualization
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

---

## Project Structure 📂

```
src/
├── components/
│   ├── Planet.tsx         # Component for rendering individual planets
│   ├── Planets.tsx        # Container for all planets
│   ├── Sun.tsx            # Sun component
│   ├── Scene.tsx          # Main scene combining all objects
│   ├── AsteroidBelt.tsx   # Procedural asteroid belt generator
│   └── Stars.tsx          # Procedural star field generator
├── data/
│   ├── planetsData.ts     # Planet properties (size, distance, textures, etc.)
├── textures/              # Textures for planets and rings
├── App.tsx                # Entry point of the application
```

---

## Technologies Used 💻

- **React Three Fiber**: 3D rendering with React
- **Three.js**: Core 3D library
- **@react-three/drei**: Helper utilities for React Three Fiber
- **TypeScript**: Strict type checking for scalable development

---

## Features to Explore 🎮

1. **Click a planet**: Opens a detailed panel on the left with:
   - Name
   - Description
   - Texture
2. **Hover over a planet**: Displays a small tooltip with the planet's name.
3. **Dynamic asteroid belts**: See thousands of asteroids rendered procedurally.
4. **Kuiper Belt Simulation**: Visualize the farthest objects in our solar system.

---

## Customization 🔧

### Adding a New Planet

1. Open `src/data/planetsData.ts`.
2. Add the new planet's details (e.g., name, size, texture, etc.):

   ```ts
   {
     name: "Pluto",
     color: "gray",
     distance: 18.5,
     size: 0.2,
     orbitSpeed: 0.03,
     rotationSpeed: 0.005,
     tilt: 120,
     texture: "planet_textures/2k_pluto.jpg",
     description: "Pluto is a dwarf planet in the Kuiper Belt.",
   },
   ```

3. Restart the development server.

---

## Future Enhancements 🚀

- Add **moons** for planets like Earth, Jupiter, and Saturn.
- Incorporate **real-time lighting** based on the Sun's position.
- Add **animations** for planet selection and zooming.
- Introduce **UI controls** for toggling asteroid belts or modifying the time scale.

---

## License 📜

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute as per the terms of the license.

---

## Contribution 🤝

Contributions are welcome! Please fork the repository and create a pull request with your enhancements or bug fixes.
