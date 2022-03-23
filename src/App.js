
import "./App.css";
import Home from "./Pages/Home";
import Faq from "./Pages/Faq";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="faq" element={<Faq />} />
      </Routes>

      <Footer />
      <h1> Página Inicial!</h1>
      <button className="btn-success"> Teste</button>
    </>
  );
}

export default App;
