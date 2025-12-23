import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import EmployeeDetails from "./Components/EmployeeDetails";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
