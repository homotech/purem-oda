import HeroImage from "./heroImage";
import HeroText from "./heroText";

export default function Body() {
  return (
    <div className="container flex flex-wrap">
      <HeroText />
      <HeroImage />
    </div>
  );
}
