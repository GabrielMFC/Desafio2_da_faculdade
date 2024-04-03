import "./lista.css"

function Minhalista(props) {
  return (
    <>
      <tbody>
        <tr>
          <td>{props.numero}</td>
          <td>{props.nome}</td>
          <td>{props.valor}</td>
          <td>{props.qtd}</td>
          <td>{props.data}</td>
        </tr>
      </tbody>
      </>
  );
}

export default Minhalista;