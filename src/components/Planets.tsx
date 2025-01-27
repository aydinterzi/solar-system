// src/components/Planets.tsx
import React, { FC } from "react";
import Planet from "./Planet";
import { planetsData } from "../data/planets";
import { PlanetProps } from "../data/planets";

interface PlanetsProps {
  onPlanetClick?: (planet: PlanetProps) => void;
}

const Planets: FC<PlanetsProps> = ({ onPlanetClick }) => {
  return (
    <>
      {planetsData.map((planet) => (
        <Planet key={planet.name} {...planet} onPlanetClick={onPlanetClick} />
      ))}
    </>
  );
};

export default Planets;
