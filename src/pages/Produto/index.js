import { useParams } from "react-router-dom";

function Produto() {
  const { id } = useParams("id");

  return (
    <div>
      <h1>Pagina de Produto</h1>
      <br />
      <span>O produto selecionado foi: {id}</span>
    </div>
  );
}

export default Produto;
