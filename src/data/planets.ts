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
  description?: string;
}

export const planetsData: PlanetProps[] = [
  {
    name: "Mercury",
    color: "gray",
    distance: 2.5,
    size: 0.2,
    orbitSpeed: 0.8,
    rotationSpeed: 0.005,
    tilt: 0,
    texture: "planet_textures/2k_mercury.jpg",
    description:
      "Mercury is the smallest planet in the Solar System and the closest to the Sun.",
  },
  {
    name: "Venus",
    color: "yellow",
    distance: 3.5,
    size: 0.4,
    orbitSpeed: 0.6,
    rotationSpeed: -0.002,
    tilt: 177,
    texture: "planet_textures/2k_venus_atmosphere.jpg",
    description: "Venus is the second planet from the Sun.",
  },
  {
    name: "Earth",
    color: "blue",
    distance: 4.5,
    size: 0.5,
    orbitSpeed: 0.5,
    rotationSpeed: 0.03,
    tilt: 23.5,
    texture: "planet_textures/2k_earth_daymap.jpg",
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
  },
  {
    name: "Mars",
    color: "red",
    distance: 6,
    size: 0.3,
    orbitSpeed: 0.4,
    rotationSpeed: 0.028,
    tilt: 25,
    texture: "planet_textures/2k_mars.jpg",
    description: "Mars is the fourth planet from the Sun.",
  },
  {
    name: "Jupiter",
    color: "orange",
    distance: 9.2,
    size: 1.2,
    orbitSpeed: 0.2,
    rotationSpeed: 0.1,
    tilt: 3,
    texture: "planet_textures/2k_jupiter.jpg",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
  },
  {
    name: "Saturn",
    color: "goldenrod",
    distance: 13,
    size: 1.0,
    orbitSpeed: 0.15,
    rotationSpeed: 0.08,
    tilt: 27,
    texture: "planet_textures/2k_saturn.jpg",
    ring: {
      innerRadius: 1.4,
      outerRadius: 2.0,
      segments: 64,
      texture: "planet_textures/2k_saturn_ring_alpha.png",
    },
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System.",
  },
  {
    name: "Uranus",
    color: "lightblue",
    distance: 16,
    size: 0.8,
    orbitSpeed: 0.1,
    rotationSpeed: 0.04,
    tilt: 98,
    texture: "planet_textures/2k_uranus.jpg",
    description: "Uranus is the seventh planet from the Sun.",
  },
  {
    name: "Neptune",
    color: "blue",
    distance: 19,
    size: 0.8,
    orbitSpeed: 0.05,
    rotationSpeed: 0.035,
    tilt: 28,
    texture: "planet_textures/2k_neptune.jpg",
    description: "Neptune is the eighth and farthest planet from the Sun.",
  },
];
