import './play.css';
import {useState, Component} from 'react';
import axios from 'axios';

class Register extends Component {
    constructor() {
        super()
        this.state= {
            username: '',
            email: '',
            password : ''
        }
        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    changeEmail(e) {
        this.setState({
            email : e.target.value
        })
    }
    changePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const res = {
            username : this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:4000/register", res)
        .then (response => window.location.href= 'http://localhost:3000/login');
        
        this.setState({
            username : '', 
            email : '',
            password : ''
        })
    }
render() {
    return (
        <>
        <div className="login">
            <div className="container-login">
                <div className="box">
                   <form onSubmit = {this.onSubmit} >
                    <div>
                        <label>
                            Username
                        </label>
                        <input type="text" onChange = {this.changeUsername} value = {this.state.username}/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" onChange = {this.changeEmail} value = {this.state.email}/>  
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" onChange = {this.changePassword} value = {this.state.password}/>
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
}

export default Register;