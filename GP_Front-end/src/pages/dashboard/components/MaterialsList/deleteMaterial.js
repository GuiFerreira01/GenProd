import axios from 'axios';
import { Alert } from 'bootstrap';
import { useParams } from 'react-router-dom';



function DeleteMaterialAPI() {
    console.log('foi')

    const getToken = () => {
        return localStorage.getItem('USER_KEY');
    }

    const { id } = useParams()
    axios.delete(`http://localhost:2001/api/v1/deletematerial/${id}`, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    }).then((response) => {
        console.log(response)
        return window.location.href = "http://localhost:3000/seeMaterials";
    }).catch((err) => {

        return window.location.href = "http://localhost:3000/seeMaterials";
    })
}



export default DeleteMaterialAPI;
