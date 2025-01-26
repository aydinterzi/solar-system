import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { PlanetProps } from "../data/planets";

function Planet({
  name,
  color,
  distance,
  size,
  orbitSpeed,
  rotationSpeed = 0.01,
  tilt = 0,
  texture,
  ring,
}: PlanetProps) {
  const orbitRef = useRef<THREE.Group>(null);
  const planetGroupRef = useRef<THREE.Group>(null);

  const colorMap = useLoader(THREE.TextureLoader, texture);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (orbitRef.current) {
      orbitRef.current.rotation.y = elapsed * orbitSpeed;
    }

    if (planetGroupRef.current) {
      planetGroupRef.current.rotation.y += rotationSpeed;
    }
  });

  const tiltRad = (tilt * Math.PI) / 180;

  return (
    <group ref={orbitRef}>
      <group
        ref={planetGroupRef}
        position={[distance, 0, 0]}
        rotation={[0, 0, tiltRad]}
      >
        <mesh>
          <sphereGeometry args={[size, 32, 32]} />
          {colorMap ? (
            <meshStandardMaterial map={colorMap} />
          ) : (
            <meshStandardMaterial color="white" />
          )}
        </mesh>

        {ring && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry
              args={[ring.innerRadius, ring.outerRadius, ring.segments]}
            />
            <meshBasicMaterial
              color="gray"
              side={THREE.DoubleSide}
              transparent
            />
          </mesh>
        )}
      </group>
    </group>
  );
}

export default Planet;
