import Header from "../components/Header";
import Jogo from "../components/Jogo";

export default function ListaDeJogos() {
  return (
    <>
      <Header relativo="next" />
      <main>
        <h1>Veja a seguir uma lista de jogos que fizeram muito sucesso:</h1>
        <Jogo img="../../public/gta_v_logo.png" nome="GTA V" />
        <Jogo img="../../public/rdr_ii_logo.png" nome="RDR II" />
        <Jogo img="../../public/ghost_recon_wildlands_logo.png" nome="Ghost Recon Wildlands" />
      </main>
    </>
  );
}
