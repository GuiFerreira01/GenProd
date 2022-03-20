import { Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios'

import './form.css'
import { useParams } from 'react-router-dom';


function EditMat() {

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:2001/materials/${id}`)
            .then(response => {
                setMaterial(response.data)
                // console.log(product.material)
            });

    })


    const [material, setMaterial] = useState('');


    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');



    function Enviar(event) {
        event.preventDefault()




        axios.put(`http://localhost:2001/materials/edit`, {
            "id": material.id,
            "name": name,
            "amount": amount
        })
            .then((response) => {
                console.log(response.data);
                window.location.href="http://localhost:3000/home"
            });
    }





    return (
        <div className="formMaterial-content">
            <div className='form-color'>
                <div className='form-form'>
                    <div className='title'>
                        <h3>Edit Material</h3>
                    </div>
                    <form onSubmit={Enviar} className="add" method='post'>

                        <div className='materials'>
                            <input defaultValue={material.material} autoComplete='off' type="text" className='m-2' id="material1" name='material1' placeholder="Product's Mateiral" onChange={e => setName(e.target.value)} />
                            <input defaultValue={material.material} autoComplete='off' type="number" className='m-2' name='quantity1' placeholder="Material's qauntity" onChange={e => setAmount(e.target.value)} />
                        </div>

                        <input id='submit' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default EditMat;
