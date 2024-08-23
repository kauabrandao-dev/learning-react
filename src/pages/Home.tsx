import Header from "../components/Header";
import "../css/style.css";

export default function Home() {
  return (
    <>
      <Header relativo="next" />
      <main>
        <a href="https://www.react.dev/" target="_blank" rel="external">
          <img src="../../public/react_logo.png" alt="Logo React" />
        </a>
        <h1>Learning React</h1>
        <p>Seja bem vindo ao meu projeto feito com React!</p>
      </main>
    </>
  );
}
