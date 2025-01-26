export interface RingProps {
  innerRadius: number;
  outerRadius: number;
  segments: number;
  texture?: string;
}

export interface PlanetProps {
  name: string;
  color: string;
  distance: number;
  size: number;
  orbitSpeed: number;
  rotationSpeed?: number;
  tilt?: number;
  texture?: string;
  ring?: RingProps;
}

export const planetsData: PlanetProps[] = [
  {
    name: "Mercury",
    color: "gray",
    distance: 2,
    size: 0.3,
    orbitSpeed: 4.15,
    rotationSpeed: 0.02,
    tilt: 0,
    texture: "planet_textures/2k_mercury.jpg",
  },
  {
    name: "Venus",
    color: "yellow",
    distance: 3,
    size: 0.5,
    orbitSpeed: 1.62,
    rotationSpeed: 0.02,
    tilt: 177,
    texture: "planet_textures/2k_venus_atmosphere.jpg",
  },
  {
    name: "Earth",
    color: "blue",
    distance: 4,
    size: 0.5,
    orbitSpeed: 1,
    rotationSpeed: 0.02,
    tilt: 23.5,
    texture: "planet_textures/2k_earth_daymap.jpg",
  },
  {
    name: "Mars",
    color: "red",
    distance: 5,
    size: 0.4,
    orbitSpeed: 0.8,
    rotationSpeed: 0.02,
    tilt: 25,
    texture: "planet_textures/2k_mars.jpg",
  },
  {
    name: "Jupiter",
    color: "orange",
    distance: 7,
    size: 1.1,
    orbitSpeed: 0.4,
    rotationSpeed: 0.02,
    tilt: 3,
    texture: "planet_textures/2k_jupiter.jpg",
  },
  {
    name: "Saturn",
    color: "goldenrod",
    distance: 9,
    size: 0.9,
    orbitSpeed: 0.34,
    rotationSpeed: 0.02,
    tilt: 27,
    texture: "planet_textures/2k_saturn.jpg",
    ring: {
      innerRadius: 1.1,
      outerRadius: 1.5,
      segments: 64,
      texture: "planet_textures/2k_saturn_ring_alpha.png",
    },
  },
  {
    name: "Uranus",
    color: "lightblue",
    distance: 11,
    size: 0.8,
    orbitSpeed: 0.24,
    rotationSpeed: 0.02,
    tilt: 98,
    texture: "planet_textures/2k_uranus.jpg",
  },
  {
    name: "Neptune",
    color: "blue",
    distance: 13,
    size: 0.8,
    orbitSpeed: 0.19,
    rotationSpeed: 0.02,
    tilt: 28,
    texture: "planet_textures/2k_neptune.jpg",
  },
];
