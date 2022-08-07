import './play.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Component} from 'react';


class Login extends Component {

    constructor() {
        super()
        this.state = {
            email : '',
            password : ''
        }
        this.loginEmailChange = this.loginEmailChange.bind(this);
        this.loginPasswordChange = this.loginPasswordChange.bind(this);
        this.loginOnSubmit = this.loginOnSubmit.bind(this);
    }

    loginEmailChange(e) {
       this.setState = {
         email: e.target.value
       }
    }
    loginPasswordChange(e) {
        console.log(this.state.password)
        this.setState = {
            password: e.target.value
          }
    }

    loginOnSubmit(e) {
        e.preventDefault();
        const res = {
            email: this.state.email,
            password : this.state.password
        }

        axios.post('http://localhost:4000/login', res)
        .then(response => window.location.href="http://localhost:3000/")

        this.setState =  {
            email : '',
            password : ''
        }
    }
render() {
    return (
        <>
        <div className="login">
            <div className="container-login">
                <div className="box">
                <form onSubmit = {this.loginOnSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" onChange={this.loginEmailChange} value = {this.state.email}/>
                    </div>
                    <div> 
                        <label>Password</label>
                        <input type="password" onChange = {this.loginPasswordChange} value = {this.state.password}/>
                    </div>
                    <div>
                        <button className="login_button">Log in</button>
                    </div>
                    <p>Don't have an account ?</p> <Link className="sign-up" to='/register'>Sign up</Link>
                </form>
                </div>
            </div>
        </div>
    </>
       
    )}
}

export default Login;