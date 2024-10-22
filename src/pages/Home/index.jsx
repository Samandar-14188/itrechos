import Choose from "../Choose";
import Homepage from "../HomePage";
import Services from "../ServicesPage";

export default function Home() {
  return (
    <div>
      <div className="main">
        <Homepage />
        <Services></Services>
        <Choose />
      </div>
    </div>
  );
}
