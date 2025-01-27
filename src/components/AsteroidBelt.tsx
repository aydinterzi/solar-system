import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AsteroidBeltInstancedProps {
  count?: number;
  innerRadius?: number;
  outerRadius?: number;
  orbitSpeed?: number;
}

export default function AsteroidBeltInstanced({
  count = 2000,
  innerRadius = 6,
  outerRadius = 7,
  orbitSpeed = 0.05,
}: AsteroidBeltInstancedProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = new THREE.Object3D();

  useEffect(() => {
    if (!meshRef.current) return;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = THREE.MathUtils.lerp(
        innerRadius,
        outerRadius,
        Math.random()
      );
      const y = (Math.random() - 0.5) * 0.5;

      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);

      dummy.position.set(x, y, z);

      dummy.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      const scale = Math.random() * 0.03 + 0.01;
      dummy.scale.set(scale, scale, scale);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [count, innerRadius, outerRadius]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += orbitSpeed * 0.001;
    }
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#888" />
    </instancedMesh>
  );
}
