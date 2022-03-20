import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../api/authenticationService';
import Header from './components/navbar';
import Produtos from './components/ProductsList/listaDeProdutos';






export const Home = (props) => {




    const getToken = () => {
        return localStorage.getItem('USER_KEY');
    }

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
            props.history.push('/');
        })
    }, [])

    return (
        <div>
            <Header />
            <div className='color'>
                <Produtos botao={data.roles} />
            </div>
        </div>
    )
}