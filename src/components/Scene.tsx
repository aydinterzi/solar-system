import Sun from "./Sun";
import Planets from "./Planets";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />

      <Sun />

      <Planets />
    </>
  );
}

export default Scene;
