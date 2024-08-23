import "./LinguagemDeProgramacao.css";

interface Props {
  nome: string;
  criador: string;
  anoDeCriacao: number;
  imagem: string;
}

export default function LinguagemDeProgramacao(props: Props) {
  return (
    <div className="linguagem-de-programacao">
      <h2>{props.nome}</h2>
      <img src={props.imagem} alt={props.nome} />
      <p>Criada por: {props.criador}</p>
      <p>Ano de criação: {props.anoDeCriacao}</p>
    </div>
  );
}
