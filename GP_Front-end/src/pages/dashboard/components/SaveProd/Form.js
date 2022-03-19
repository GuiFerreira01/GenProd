import { Col, Form, Select, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios'

import './form.css'
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';


function FormProd() {

    const getToken = () => {
        return localStorage.getItem('USER_KEY');
    }

    const [page, setPage] = useState();

    useEffect(() => {
        axios.get("http://localhost:2001/api/v1/materials/allmaterials", {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        })
            .then(response => {
                setPage(response.data)
            });
    })


    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [amount, setAmount] = useState('');


    const [materialName, setMaterialName] = useState('');

    const [material1, setMaterial1] = useState('');
    const [material2, setMaterial2] = useState('');
    const [materialId1, setMaterialId1] = useState('');
    const [materialId2, setMaterialId2] = useState('');

    const [isActive, setActive] = useState('');



    const saveMaterials = () => {

        axios.get(`http://localhost:2001/api/v1/materials/material/${materialId1}`, {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        })
            .then(response => {
                setMaterial1(response.data)
                console.log(material2)
            });

        axios.get(`http://localhost:2001/api/v1/materials/material/${materialId2}`, {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        })
            .then(response => {
                setMaterial2(response.data)
                console.log(material2)
            });

        if(isActive == false){
            setActive(!isActive);
        }
        
    }


    //console.log(materialId)
    function Enviar(event) {
        event.preventDefault()

        axios.post(`http://localhost:2001/api/v1/addproduct`, {
            "name": name,
            "cost": cost,
            "amount": amount,
            "material": [
                {
                    "name": material1.name,
                    "amount": material1.amount
                },
                {
                    "name": material2.name,
                    "amount": material2.amount
                }
            ]
        }, {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        })
            .then((response) => {
                console.log(response.data);
                window.location.href = "http://localhost:3000/home"
            })
    }

    return (
        <div className="form-content">
            <div className='form-color'>
                <div className='form-form'>
                    <div className='title'>
                        <h3>Add Product</h3>
                    </div>
                    <form onSubmit={Enviar} className="add" method='post'>
                        <label for="Name">Name</label>
                        <input minLength={4} autoComplete='off' type="text" id='Name' name='Name' placeholder="Product'S Name" onChange={e => setName(e.target.value)} />

                        <label for="cost">Cost</label>
                        <input minLength={1} autoComplete='off' type="number" id='cost' name='cost' placeholder='$00' onChange={e => setCost(e.target.value)} />

                        <label for="Quantity">Quantity</label>
                        <input minLength={1} autoComplete='off' type="number" id='Quantity' name='Quantity' placeholder='00' onChange={e => setAmount(e.target.value)} />

                        <div className='materials'>
                            <div className='material-title'>
                                <label id="title-materials" for="material1"> Raw Mateirals </label>
                            </div>
                            <hr />
                            <div className={isActive ? null : "none"}>
                                <h5 className='color-light'>Raw Material Submited</h5>
                            </div>
                            <div id="flex">

                                <Form.Select className='mr-2' onChange={e => setMaterialId1(e.target.value)} id="teste" aria-label="Default select example">
                                    <option >Open this select menu</option>
                                    {typeof page !== "undefined" && page.map((value) => {
                                        // console.log(value)
                                        return <option value={value.id}>{value.name}</option>;
                                    })}

                                </Form.Select>
                                <Form.Select onChange={e => setMaterialId2(e.target.value)} id="teste" aria-label="Default select example">
                                    <option >Open this select menu</option>
                                    {typeof page !== "undefined" && page.map((value) => {
                                        // console.log(value)
                                        return <option value={value.id}>{value.name}</option>;
                                    })}

                                </Form.Select>

                            </div>

                            <a className='btn btn-light my-3' onClick={saveMaterials}>Submit Materials</a>
                            <Link to={"/savematerial"} className='btn btn-primary my-3 mx-3'>Added Materials</Link>

                            <hr />
                        </div>

                        <input id='submit' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormProd;
