import axios from 'axios';
import { useParams } from 'react-router-dom';



function DeleteProductAPI() {

    const getToken = () => {
        return localStorage.getItem('USER_KEY');
    }

    const {id} = useParams()


    axios.delete(`http://localhost:2001/api/v1/deleteproduct/${id}`, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    }).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
        window.location.href = "http://localhost:3000/home";
    })
    window.location.href="http://localhost:3000/home";
}



export default DeleteProductAPI;
