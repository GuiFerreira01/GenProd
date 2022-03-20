import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../api/authenticationService';
import Material from './components/MaterialsList/MaterialsList';
import Header from './components/navbar';


export const MaterialList = (props) => {


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
        <div id='color'>
            <Header />
            <Material botao={data.roles} />
        </div>
    )
}