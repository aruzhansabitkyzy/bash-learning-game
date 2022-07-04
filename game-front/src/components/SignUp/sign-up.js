import "../SignIn/sign-inup.css";


export const SignUp = () => {
    return (
                <div className="main-cont">
                       <div className="title">Sign up</div>
                       <form className="sign-form" method="post">
                          <label>
                            Email:
                            <input type="email" placeholder="" name="email"></input>
                          </label>
                          <label>
                            First Name:
                            <input type="text" placeholder="" name="first_name"></input>
                          </label>
                          <label>
                            Last Name:
                            <input type="text" placeholder="" name="last_name"></input>
                          </label>
                          <label>
                            Password:
                            <input type="password" placeholder="" name="password"></input>
                          </label>
                          <label>
                            Confirm password:
                            <input type="pass1more" placeholder="" name="pass1more"></input>
                          </label>
                          <button className = "submit-btn">Sign up</button>
                       </form>
                  </div>
    )
}

