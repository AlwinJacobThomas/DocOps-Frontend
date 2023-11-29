import { useState } from "react";

const UserSignup = (props) => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="container">
            <h1 className="user-card-title">Sign Up</h1>
            <p className="user-card-subtitle">Create your account now</p>
            <form onSubmit={handleSubmit}>
                <div className="user-card-list">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="password1">Password1</label>
                    <input type="password" value={password1} name="password1" id="password1" onChange={(e)=>setPassword1(e.target.value)}/>
                    <input type="password" value={password2} name="password2" id="password2" onChange={(e)=>setPassword2(e.target.value)}/>
                    <button type="submit" >Login</button>
                </div>
            </form>
            <p>Have an account?<button  onClick={()=>props.onFormSwitch('login')} >Login</button> </p> 
        </div >
    );
}

export default UserSignup;