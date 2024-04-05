import "./lista.css"

function Minhalista(props) {
  let data = props.data
  return (
    <>
      <tbody>
        <tr>
          <td>{props.numero}</td>
          <td>{props.nome}</td>
          <td>{props.valor}</td>
          <td>{props.qtd}</td>
          <td>{data.substring(0, 10)}</td>
        </tr>
      </tbody>
    </>
  );
}

export default Minhalista;