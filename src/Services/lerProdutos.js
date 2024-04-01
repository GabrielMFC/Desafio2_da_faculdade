import axios from "axios";
function lerProdutos() {
    let token = localStorage.getItem("token")
   return axios.get('http://localhost:3400/produtos', {
        headers: {
          'Authorization': `${token}`
        }
      })
      .then((response) => {
        return response.data
      })  
}
export default lerProdutos