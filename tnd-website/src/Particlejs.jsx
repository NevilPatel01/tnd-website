import Particles from "react-tsparticles";
import ParticlesjsConfig from "./config/ParticlesjsConfig";

const Particlejs = () => {
  return (
    <Particles
      params={ParticlesjsConfig}
      className="absolute top-0 left-0 w-full h-full z-10"
    />
  );
};

export default Particlejs;
