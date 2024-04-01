import "./lista.css"
function Minhalista(props) {
  console.log(props.nome)
    return(
    <>
    <tbody>
    <tr>
    <td>{props.numero}</td>
    <td>{props.nome}</td>
    <td>{props.valor}</td>
    <td>{props.qtd}</td>
    <td>{props.data.substring(0, 10)}</td>
    </tr>
  </tbody>
  </>
    )
}
export default Minhalista