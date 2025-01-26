import Planet from "./Planet";
import { planetsData } from "../data/planets";

function Planets() {
  return (
    <>
      {planetsData.map(({ name, ...rest }) => (
        <Planet key={name} {...rest} />
      ))}
    </>
  );
}

export default Planets;
