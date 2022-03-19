import { useState } from 'react';
import axios from 'axios'
import './form.css'


function FormMaterials() {

    const getToken = () => {
        return localStorage.getItem('USER_KEY');
    }

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const [send, setSend] = useState();

    function Enviar(event) {
        event.preventDefault()
        axios.post(`http://localhost:2001/api/v1/materials/addmaterial`, {
            "name": name,
            "amount": amount
        }, {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        })
            .then((response) => {
                console.log(response.data);
                window.location.href = "http://localhost:3000/home"
            });
    }



    return (
        <div className="formMaterial-content">
            <div className='form-color'>
                <div className='form-form'>
                    <div className='title'>
                        <h3>Add Raw Material</h3>
                    </div>
                    <form onSubmit={Enviar} className="add" method='post'>
                        <label for="Name">Name</label>
                        <input minLength={3} type="text" id='Name' name='Name' placeholder="Material'S Name" onChange={e => setName(e.target.value)} />

                        <label for="Quantity">Quantity</label>
                        <input minLength={1} type="number" id='Quantity' name='Quantity' placeholder='00' onChange={e => setAmount(e.target.value)} />

                        <input id='submit' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default FormMaterials;
