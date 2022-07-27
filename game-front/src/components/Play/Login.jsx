import './play.css';
import {Link} from 'react-router-dom';


export const Login = () => {

    return (
        <>
        <div className="login">
            <div className="container-login">
                <div className="box">
                <form>
                    <div>
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div>
                        <button className="login_button">Log in</button>
                    </div>
                    <p>Don't have an account ? </p> <Link className="sign-up" to='/register'>Sign up</Link>
                </form>
                </div>
            </div>
        </div>
    </>
       
    )
}