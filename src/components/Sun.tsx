function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial emissive="yellow" emissiveIntensity={1} />

      <pointLight color={"white"} intensity={2} distance={50} castShadow />
    </mesh>
  );
}

export default Sun;
