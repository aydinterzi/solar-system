import { useRef, useEffect } from "react";
import * as THREE from "three";

function Stars({ count = 1000 }) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 500;
        const y = (Math.random() - 0.5) * 500;
        const z = (Math.random() - 0.5) * 500;
        positions.set([x, y, z], i * 3);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.5,
      });

      const points = new THREE.Points(geometry, material);
      groupRef.current.add(points);
    }
  }, [count]);

  return <group ref={groupRef} />;
}

export default Stars;
