import tw from 'twin.macro';
import GlobalStyleSheet from './assets/css/GlobalStyleSheet';
import BodyHeader from './components/body/BodyHeader';
import Navbar from './components/navbar/Navbar';
function App() {

  return (
    <>
    <GlobalStyleSheet/>
    <Navbar></Navbar>
    <div css={tw`mt-[64px]`}>
      <BodyHeader></BodyHeader>
    </div>
    </>
  )
}

export default App
