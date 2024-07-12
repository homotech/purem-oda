import HeroImage from "./heroImage";
import HeroImageRight from "./heroImageRight";
import HeroText from "./heroText";

export default function Body() {
  return (
    <div className="flex flex-wrap md:flex-nowrap md:h-[750px] md:flex-row md:gap-4 body-container">
      <div className="md:w-1/2 h-full md:flex md:flex-col md:justify-between">
        <HeroText />
        <HeroImage />
      </div>
      <HeroImageRight />
    </div>
  );
}
