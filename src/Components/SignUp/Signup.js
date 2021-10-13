import React from 'react';
import './Signup.css'
import logo3 from '../../Images/logo2.png'

import useFirebase from '../../Hooks/useFirebase';

const Signup = () => {
    const {handleRegistration,
        signOut,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange} = useFirebase()

    return (
        <div>
             <div>
                 <img className='signup-logo' src={logo3} alt="" />

                 <div className='form'>
                    <form onSubmit={handleRegistration}>
                        <input onBlur={handleNameChange} className='my-2 input-btn' type="text" name="email" id="1" placeholder="Name"/>
                        <br /> 
                        <input onBlur={handleEmailChange}  className='my-2 input-btn' type="email" name="password" id="2" placeholder='Email'/>
                        <br />
                        <input onBlur={handlePasswordChange} className='my-2 input-btn' type="password" name="" id="3" placeholder='Password' />
                        <br />
                        
                        <br />
                        <button className='my-2 btn btn-danger submit-btn' type="submit">Submit</button>
                        <br />
                        

                    </form>
                    <p className='text-danger'>Already have an account</p>

                    

                </div>
             </div>
        </div>
    );
};

export default Signup;