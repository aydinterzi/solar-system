import { useState } from "react";
import Sun from "./Sun";
import Planets from "./Planets";
import { PlanetProps } from "../data/planets";
import { Html } from "@react-three/drei";

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

      <Planets onPlanetClick={handlePlanetClick} />
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
