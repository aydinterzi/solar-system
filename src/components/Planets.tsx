import Planet from "./Planet";
import { planetsData } from "../data/planets";

function Planets() {
  return (
    <>
      {planetsData.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}
    </>
  );
}

export default Planets;
