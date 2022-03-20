import { Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios'

import './form.css'
import { useParams } from 'react-router-dom';


function EditProd(props) {

    const { id } = useParams()


    const getToken = () => {
        return localStorage.getItem('USER_KEY');
    }

    useEffect(() => {
        axios.get(`http://localhost:2001/api/v1/product/${id}`, {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        })
            .then(response => {
                setProduct(response.data)
                // console.log(product.material)
            });

    })


    const [product, setProduct] = useState('');


    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [amount, setAmount] = useState('');

    const [materialName1, setMaterialName1] = useState('');
    const [materialAmount1, setMaterialAmount1] = useState('');

    const [materialName2, setMaterialName2] = useState('');
    const [materialAmount2, setMaterialAmount2] = useState('');




    function Enviar(event) {
        event.preventDefault()


        const nameProd = document.getElementById("Name")
        const costProd = document.getElementById("cost")
        const amountProd = document.getElementById("Quantity")






        if (nameProd.value == "") {
            setName(product.name)
        }
        if (costProd.value == "") {
            setCost(product.cost)

        }
        if (amountProd.value == "") {
            setAmount(product.amount)

        }


        axios.put(`http://localhost:2001/api/v1/editproduct`, {
            "id": product.id,
            "name": name,
            "cost": cost,
            "amount": amount,
            "material": [
                {
                    "name": materialName1,
                    "amount": materialAmount1
                },
                {
                    "name": materialName2,
                    "amount": materialAmount2
                }
            ]
        },{
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        })
            .then((response) => {
                {
                    typeof product.material !== "undefined" && product.material.map((value) => {
                        axios.delete(`http://localhost:2001/api/v1/deletematerial/${value.id}`, {
                            headers: {
                                Authorization: 'Bearer ' + getToken()
                            }
                        })
                    })
                }
                window.location.href = "http://localhost:3000/home"
            });
    }





    return (
        <div className="form-content">
            <div className='form-color'>
                <div className='form-form'>
                    <div className='title'>
                        <h3>Edit Product</h3>
                    </div>
                    <form onSubmit={Enviar} className="add" method='post'>
                        <label for="Name">Name</label>
                        <input defaultValue={product.name} autoComplete='off' type="text" id='Name' name='Name' placeholder="Product'S Name" onChange={e => setName(e.target.value)} />

                        <label for="cost">Cost</label>
                        <input autoComplete='off' type="number" id='cost' name='cost' placeholder='$00,00' onChange={e => setCost(e.target.value)} />

                        <label for="Quantity">Quantity</label>
                        <input autoComplete='off' type="number" id='Quantity' name='Quantity' placeholder='00' onChange={e => setAmount(e.target.value)} />

                        <div className='materials'>
                            <div className='material-title'>
                                <label id="title-materials" for="material1">Mateirals</label>
                            </div>
                            <hr />

                            <Col className=' responsive'>
                                <input autoComplete='off' type="text" className='m-2' id="material1" name='material1' placeholder="Product's Mateiral" onChange={e => setMaterialName1(e.target.value)} />
                                <input autoComplete='off' type="number" className='m-2' name='quantity1' placeholder="Material's qauntity" onChange={e => setMaterialAmount1(e.target.value)} />
                            </Col>

                            <Col className=' responsive'>
                                <input autoComplete='off' type="text" className='m-2' id="material1" name='material1' placeholder="Product's Mateiral" onChange={e => setMaterialName2(e.target.value)} />
                                <input autoComplete='off' type="number" className='m-2' name='quantity1' placeholder="Material's qauntity" onChange={e => setMaterialAmount2(e.target.value)} />
                            </Col>


                            <hr />
                        </div>

                        <input id='submit' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default EditProd;
