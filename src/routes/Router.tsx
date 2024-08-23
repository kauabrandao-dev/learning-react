import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LinguagensDeProgramacao from "../pages/LinguagensDeProgramacao";
import ListaDeJogos from "../pages/ListaDeJogos";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/linguagens-de-programacao"
          element={<LinguagensDeProgramacao />}
        />
        <Route path="/lista-de-jogos" element={<ListaDeJogos />} />
      </Routes>
    </BrowserRouter>
  );
}
