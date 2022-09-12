import "./App.css";
import Main from "./main/pages/main";
import SecondPart from "./main/pages/SecondPart";
import ThirdPart from "./main/pages/ThirdPart";
import FourthPart from "./main/pages/FourthPart";
import Apresentation from "./main/pages/Apresentation";
import Contact from "./main/pages/Contact";
import Footer from "./main/components/Footer";
import Final from "./main/pages/Final";

function App() {
  return (
    <div>
      <Main />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <Apresentation />
      <Contact />
      <Final />

      <Footer />
    </div>
  );
}

export default App;
