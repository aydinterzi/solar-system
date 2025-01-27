import { useState } from "react";
import Sun from "./Sun";
import Planets from "./Planets";
import { PlanetProps } from "../data/planets";
import { Html } from "@react-three/drei";
import AsteroidBeltInstanced from "./AsteroidBelt";
import Stars from "./Stars";

function Scene() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetProps | null>(
    null
  );
  function handlePlanetClick(planet: PlanetProps) {
    setSelectedPlanet(planet);
  }
  return (
    <>
      <ambientLight intensity={1} />
      <Sun />
      <Stars count={3000} />
      <Planets onPlanetClick={handlePlanetClick} />
      <AsteroidBeltInstanced
        count={2000}
        innerRadius={6.5}
        outerRadius={7.5}
        orbitSpeed={0.1}
      />

      <AsteroidBeltInstanced
        count={3000}
        innerRadius={22}
        outerRadius={26}
        orbitSpeed={0.02}
      />
      <Html>
        {selectedPlanet && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "250px",
              height: "100vh",
              backgroundColor: "#222",
              color: "#fff",
              padding: "1rem",
              overflowY: "auto",
            }}
          >
            <h2>{selectedPlanet.name}</h2>
            <p>{selectedPlanet.description}</p>

            <button
              style={{ marginTop: "1rem", cursor: "pointer" }}
              onClick={() => setSelectedPlanet(null)}
            >
              Close
            </button>
          </div>
        )}
      </Html>
    </>
  );
}

export default Scene;
