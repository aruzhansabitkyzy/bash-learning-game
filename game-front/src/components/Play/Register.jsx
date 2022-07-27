import './play.css';
import {useState} from 'react';
export const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const usernameChange = (e) => {
        setUsername(username + e.target.value);
    }


    return (
        <>
        <div className="login">
            <div className="container-login">
                <div className="box">
                   <form >
                    <div>
                        <label>
                            Username
                        </label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email"/>  
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div>
                        <button className="login_button">Register</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </>
    )
}