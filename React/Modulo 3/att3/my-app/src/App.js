import { Routes, Route } from "react-router-dom"
import Home from "./componentes/pages/home";
import Sobre from "./componentes/pages/sobre";
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="sobre" element={ <Sobre/> } />
      </Routes>
    </div>
  );
}

export default App;
