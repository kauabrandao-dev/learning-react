import "./Jogo.css";

interface Props {
  img: string;
  nome: string;
}

export default function Jogo(props: Props) {
  return (
    <div className="jogo">
      <img src={props.img} alt="Imagem do Jogo" />
      <span>{props.nome}</span>
    </div>
  );
}
