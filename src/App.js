import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Menu from "./pages/Menu";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Interests from "./pages/Interests";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/interests" element={<Interests />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
