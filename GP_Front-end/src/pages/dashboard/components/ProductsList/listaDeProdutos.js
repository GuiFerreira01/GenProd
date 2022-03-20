import { useState, useEffect } from 'react'
import Lista from './List'
import './produtos.css'
import axios from 'axios';
import { Row, Container } from 'react-bootstrap'




function Produtos(props) {

    const getToken = () => {
        return localStorage.getItem('USER_KEY');
    }

    const [page, setPage] = useState();

    useEffect(() => {
        axios.get('http://localhost:2001/api/v1/allproducts', {
            headers: {
                Authorization: 'Bearer ' + getToken()
            }
        }).then(response => {
            setPage(response.data)
        });
    })


    

    return (
        <Container>
            <div className='list-color'>
                <div className='list-content'>
                    <Row>
                        {typeof page !== "undefined" && page.map((value, next) => {
                            return <Lista
                                id={value.id}
                                key={value.id}
                                title={value.name}
                                cost={value.cost}
                                quantity={value.amount}
                                material={value.material}
                                data={props.botao}
                            ></Lista>;
                        })}
                    </Row>
                </div>
            </div>
        </Container>

    )
}



export default Produtos;
