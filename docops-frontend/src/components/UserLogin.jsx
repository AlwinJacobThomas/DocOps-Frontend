import { useState } from "react";

const UserLogin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="container">
            <h1 className="user-card-title">Login</h1>
            <p className="user-card-subtitle">Login with your account to continue</p>
            <form onSubmit={handleSubmit}>
                <div className="user-card-list">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="password1">Password</label>
                    <input type="password" value={password} name="password1" id="password1" onChange={(e)=>setPassword(e.target.value)}/>
                    <button type="submit" >Login</button>
                </div>
            </form>
            <p>Don’t have an account? <button onClick={() =>props.onFormSwitch('signup')}>Sign Up</button></p>
        </div >
    );
}

export default UserLogin;