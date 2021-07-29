import './App.css';


/* my components */
import Header from "./components/Header/Header.jsx";
import Intro from "./components/Intro/Intro.jsx";
import About from "./components/About/About.jsx";
import Skillis from "./components/Skillis/Skillis";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

/*  */
function App() {
  return (
    <>
      <Header/>
       <Intro/>
      
      <About/>
       <Skillis/>
     
      <Services/>
      
      <Contact/>
      
      
      <Footer/>  
    </>
  )
}
export default App;




