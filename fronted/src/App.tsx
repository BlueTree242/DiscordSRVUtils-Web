import tw from "twin.macro";
import GlobalStyleSheet from "./assets/css/GlobalStyleSheet";
import About from "./components/body/About";
import BodyHeader from "./components/body/BodyHeader";
import Features from "./components/body/Features";
import Footer from "./components/body/Footer";
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
        <Footer/>
      </div>
    </>
  );
}

export default App;
