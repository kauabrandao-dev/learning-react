import LinguagemDeProgramacao from "../components/LinguagemDeProgramacao";
import "../css/style.css";

export default function LinguagensDeProgramacao() {
  return (
    <>
      <h1>
        Olá! Veja a seguir algumas linguagens de programação que eu gosto:
      </h1>
      <ul>
        <li>
          <LinguagemDeProgramacao
            nome="JavaScript"
            criador="Brendan Eich"
            anoDeCriacao={1995}
            imagem="../../public/javascript_logo.png"
          />
        </li>
        <li>
          <LinguagemDeProgramacao
            nome="Go"
            criador="Google"
            anoDeCriacao={2009}
            imagem="../../public/golang_logo.png"
          />
        </li>
        <li>
          <LinguagemDeProgramacao
            nome="Kotlin"
            criador="JetBrains"
            anoDeCriacao={2011}
            imagem="../../public/kotlin_logo.svg"
          />
        </li>
      </ul>
    </>
  );
}
