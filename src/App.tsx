import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./components/Scene";

function App() {
  return (
    <Canvas
      camera={{
        position: [0, 10, 20],
        fov: 60,
      }}
    >
      <OrbitControls />
      <Scene />
    </Canvas>
  );
}

export default App;
