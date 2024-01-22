import React, { useState } from 'react';
import Header from './Header';
import './SignIn.css';
import siplogo from './Images/siplogo.png';
import enxcllogo from './Images/enxcllogo.png';
import Footermenu from './Footermenu';


function SignIn() {
    // State to manage form fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here using username and password state values
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <>
            <Header />
            <div className="image-container2">
      <img
        className="my-image2"
        src={enxcllogo}
        alt="logo of enxcl"
      />
    </div>

    <div className="image-container">
      <img
        className="my-image"
        src={siplogo}
        alt="logo of sip abacus"
      />
    </div>

            <div className="my-paragraph">
                <p>SIP Abacus is a skill development programme that can help in various aspects of your child’s development. SIP Abacus courses are designed to develop soft-skills, numerical abilities and overall intelligence.
</p>
            </div>
            <div className="main-div">
                <form onSubmit={handleSubmit}>
                    <h3 className='loginhead'>User Login</h3>
                   
                        <input className='inputs' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                  
                   
                        <input className='inputs'  type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                
                    <button className='button' type="submit">Login</button>
                    <a className='fgtpwd' href="#">forgot your password?</a>
                </form>
            </div>
            <Footermenu/>
        </>
    );
}

export default SignIn;