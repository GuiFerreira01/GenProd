import react, { useState } from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../redux/authActions';
import './loginpage.css';
import { userLogin } from '../api/authenticationService';
import { Alert, Spinner } from 'react-bootstrap';

const LoginPage = ({ loading, error, ...props }) => {


    const [values, setValues] = useState({
        userName: '',
        password: ''
    });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.authenticate();

        userLogin(values).then((response) => {

            console.log("response", response);
            if (response.status === 200) {
                props.setUser(response.data);
                props.history.push('/home');
            }
            else {
                props.loginFailure('Something Wrong!Please Try Again');
            }


        }).catch((err) => {

            if (err && err.response) {
                switch (err.response.status) {
                    case 401:
                        console.log("401 status");
                        props.loginFailure("Authentication Failed.Bad Credentials");
                        break;
                    default:
                        props.loginFailure('Something Wrong!Please Try Again');
                }
            }
            else {
                props.loginFailure('Something Wrong!Please Try Again');
            }




        });
        //console.log("Loading again",loading);


    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };

    console.log("Loading ", loading);

    return (
        <div className="login-page">



            <section>
                <div className="container ">

                    <div className="row justify-content-sm-center ">
                        <div className="card-wrapper">

                            <div className="card fat">
                                <div className="card-body">

                                    <div className='d-flex justify-content-center'>
                                        <h3 className="card-title">Login</h3>
                                    </div>

                                    <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                                        <div className="form-group">
                                            <label className='mb-3' htmlFor="email">User Name</label>
                                            <input id="username" type="text" className="form-control" minLength={5} value={values.userName} onChange={handleChange} name="userName" required />

                                            <div className="invalid-feedback">
                                                UserId is invalid
                                            </div>

                                        </div>

                                        <div className="form-group">
                                            <label className='mt-4 mb-3'>Password </label>
                                            <input id="password" type="password" className="form-control" minLength={8} value={values.password} onChange={handleChange} name="password" required />
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>


                                        <div id='submitCenter' className="form-group m-0">
                                            <button id="submit" type="submit" className="btn btn-primary">
                                                Login
                                                {loading && (
                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                )}

                                            </button>
                                        </div>
                                    </form>
                                    {error &&
                                        <Alert style={{ marginTop: '20px' }} variant="danger">
                                            {error}
                                        </Alert>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )



}

const mapStateToProps = ({ auth }) => {
    console.log("state ", auth)
    return {
        loading: auth.loading,
        error: auth.error
    }
}


const mapDispatchToProps = (dispatch) => {

    return {
        authenticate: () => dispatch(authenticate()),
        setUser: (data) => dispatch(authSuccess(data)),
        loginFailure: (message) => dispatch(authFailure(message))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);