import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./Pagina/Inicio";
import SobreNos from "Pagina/SobreMim";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";



function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<PaginaInicial />}  />
        <Route path="/sobrenos" element={<SobreNos />}  />
        <Route path="*" element={<div> Pagina não encontrada</div>}  />
        
     </Routes>
     <Rodape />
    
    </BrowserRouter>
   
  );
}

export default App;
