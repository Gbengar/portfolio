import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Programmer",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1500,
        "Coder",
        1500,
        "Banker",
        1500,
        "Fun Guy",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-[#ec7c3c] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
