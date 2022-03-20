import { useState, useEffect } from 'react'
import MakeList from './MakeList'
import axios from 'axios';
import { Row, Container } from 'react-bootstrap'
import './produtos.css'




function Material(props) {
    
    // const [pageNumber, setPageNumber] = useState(0);
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



    return (
        <Container>
            <div className='list-color'>
                <div className='list-content'>
                    <Row>
                        {typeof page !== "undefined" && page.map((value) => {
                            return <MakeList
                                id={value.id}
                                key={value.id}
                                title={value.name}
                                quantity={value.amount}
                                data={props.botao}
                            ></MakeList>;
                        })}
                    </Row>
                </div>
            </div>
        </Container>

    )
}



export default Material;
