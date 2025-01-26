export interface PlanetProps {
  name: string;
  color: string;
  distance: number;
  size: number;
  orbitSpeed: number;
}

export const planetsData: PlanetProps[] = [
  {
    name: "Mercury",
    color: "gray",
    distance: 2,
    size: 0.3,
    orbitSpeed: 4.15,
  },
  {
    name: "Venus",
    color: "yellow",
    distance: 3,
    size: 0.5,
    orbitSpeed: 1.62,
  },
  {
    name: "Earth",
    color: "blue",
    distance: 4,
    size: 0.5,
    orbitSpeed: 1,
  },
  {
    name: "Mars",
    color: "red",
    distance: 5,
    size: 0.4,
    orbitSpeed: 0.8,
  },
  {
    name: "Jupiter",
    color: "orange",
    distance: 7,
    size: 1.1,
    orbitSpeed: 0.4,
  },
  {
    name: "Saturn",
    color: "goldenrod",
    distance: 9,
    size: 0.9,
    orbitSpeed: 0.34,
  },
  {
    name: "Uranus",
    color: "lightblue",
    distance: 11,
    size: 0.8,
    orbitSpeed: 0.24,
  },
  {
    name: "Neptune",
    color: "blue",
    distance: 13,
    size: 0.8,
    orbitSpeed: 0.19,
  },
];
