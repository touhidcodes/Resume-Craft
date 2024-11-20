import About from "./components/About/About";
import AboutUsSlider from "./components/AboutSlider/AboutSlider";

import "./App.css";
import MainLayout from "./component/layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout />
      <AboutUsSlider></AboutUsSlider>
      <About></About>
    </>
  );
}

export default App;
