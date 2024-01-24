import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Resources from "./components/Resources";
import Card from "./components/Card";
import EventsData from "./components/EventsData";
import Particlejs from "./Particlejs";

function App() {
  return (
    <Router>
      <Header />
      <Particlejs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Card />} />
        <Route path="/events" element={<EventsData />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
