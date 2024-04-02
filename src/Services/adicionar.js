import axios from "axios"
function  AdicionarProdutos(produto) {
    let token = localStorage.getItem("token")
    return axios.post("http://localhost:3400/produtos", produto, {
        headers: {
            'Authorization': `${token}`
          }
    })
    .then((response) => {
        console.log(response.data)
        return response.data
      })
}
export default AdicionarProdutos