import tw from "twin.macro";
import GlobalStyleSheet from "./assets/css/GlobalStyleSheet";
import About from "./components/body/About";
import BodyHeader from "./components/body/BodyHeader";
import Features from "./components/body/Features";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <GlobalStyleSheet />
      <Navbar />
      <div css={tw`mt-[64px]`}>
        <BodyHeader />
        <About />
        <Features />
      </div>
    </>
  );
}

export default App;
