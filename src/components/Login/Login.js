import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/shop';

    const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirectUrl);
        })
    }

    return (
        <div className='login-form'>
            <div>
                <h2 className='custom-align-center'>Login</h2>
                <form onSubmit="">
                    <input type="email" name="email" id="" placeholder='example@gmail.com' required />
                    <br />
                    <input type="password" name="password" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                <div>
                    <p>New to ema-john? <Link to='/register'>Create new account</Link></p>
                    <p className='custom-align-center'>Or</p>
                    <button
                        className='btn-regular'
                        onClick={handleGoogleLogIn}
                    >Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;