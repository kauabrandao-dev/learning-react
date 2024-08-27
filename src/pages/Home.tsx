import "../styles/style.css";

export default function Home() {
  return (
    <>
      <header>
        <h1>learning-react</h1>
        <nav>
          <a href="/" target="_self" rel="next">
            Home
          </a>
          <a href="/lista-de-exercicios" target="_self" rel="next">
            Lista de Exercícios
          </a>
          <a href="/sobre-o-projeto" target="_self" rel="next">
            Sobre o Projeto
          </a>
        </nav>
      </header>
      <main>
        <h1>Learning React</h1>
        <a href="https://www.react.dev/" target="_blank" rel="external">
          <img src="./react_logo.png" alt="Logo do React" />
        </a>
        <p>Seja bem-vindo ao meu projeto de aprendizado de React!</p>
      </main>
      <footer>
        <p>
          Criado e desenvolvido por{" "}
          <a
            href="https://www.github.com/kauabrandao-dev"
            target="_blank"
            rel="external"
          >
            Kauã Brandão
          </a>
        </p>
      </footer>
    </>
  );
}
