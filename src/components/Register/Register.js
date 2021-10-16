import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2 className='custom-align-center'>Create a new account</h2>
                <form onSubmit="">
                    <input type="email" name="email" id="" placeholder='example@gmail.com' required />
                    <br />
                    <input type="password" name="password1" id="" placeholder='enter your password' />
                    <br />
                    <input type="password" name="password2" id="" placeholder='re-enter your password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <div>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                    <p className='custom-align-center'>Or</p>
                    <button className='btn-regular'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;