import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function Sun() {
  const texture = useLoader(TextureLoader, "planet_textures/2k_sun.jpg");
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
      <pointLight color="white" intensity={2} distance={50} />
    </mesh>
  );
}

export default Sun;
