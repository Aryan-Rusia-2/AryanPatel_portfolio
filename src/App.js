import Header from "./components/Header";
import Home from "./components/Home.jsx";
// import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <>
    <Header />
    <Home/>
    {/* <Education/> */}
    <Experience/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
