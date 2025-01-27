import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState, FC } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { PlanetProps } from "../data/planets";
import { Html } from "@react-three/drei";

interface PlanetComponentProps extends PlanetProps {
  onPlanetClick?: (planet: PlanetProps) => void;
}

const Planet: FC<PlanetComponentProps> = ({
  name,
  distance,
  size,
  orbitSpeed,
  rotationSpeed = 0.01,
  tilt = 0,
  texture,
  ring,
  description,
  onPlanetClick,
}) => {
  const orbitRef = useRef<THREE.Group>(null);
  const planetGroupRef = useRef<THREE.Group>(null);

  const colorMap = useLoader(TextureLoader, texture);

  const [hovered, setHovered] = useState(false);

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

  const handlePointerOver = () => setHovered(true);
  const handlePointerOut = () => setHovered(false);
  const handlePointerClick = () => {
    onPlanetClick?.({
      name,
      distance,
      size,
      orbitSpeed,
      rotationSpeed,
      tilt,
      texture,
      ring,
      description,
    });
  };

  return (
    <group ref={orbitRef}>
      <group
        ref={planetGroupRef}
        position={[distance, 0, 0]}
        rotation={[0, 0, tiltRad]}
      >
        <mesh
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handlePointerClick}
        >
          <sphereGeometry args={[size, 32, 32]} />
          {colorMap ? (
            <meshStandardMaterial map={colorMap} />
          ) : (
            <meshStandardMaterial color="white" />
          )}
        </mesh>

        {hovered && (
          <Html
            center
            position={[0, size + 0.2, 0]}
            style={{
              pointerEvents: "none",
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "0.8rem",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Html>
        )}

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
};

export default Planet;
