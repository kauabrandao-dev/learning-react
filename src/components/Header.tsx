import "./Header.css";

interface Props {
  relativo: string;
}

export default function Header(props: Props) {
  return (
    <header>
      <h1 id="titulo">learning-react</h1>
      <nav>
        <a href="/" target="_self" rel="prev">Home</a>
        <a href="/lista-de-exercicios" target="_self" rel={props.relativo}>Lista de Exercícios</a>
        <a href="/sobre-o-projeto" target="_self" rel={props.relativo}>Sobre</a>
      </nav>
    </header>
  );
}
