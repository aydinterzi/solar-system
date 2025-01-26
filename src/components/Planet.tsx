import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { PlanetProps } from "../data/planets";

function Planet({ color, distance, size, orbitSpeed }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (planetRef.current) {
      const t = clock.getElapsedTime() * orbitSpeed;
      planetRef.current.position.x = distance * Math.cos(t);
      planetRef.current.position.z = distance * Math.sin(t);
    }
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default Planet;
