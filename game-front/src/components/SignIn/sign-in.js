import "./sign-inup.css";

export const SignIn = () => {
    return (
                <div className="main-cont">
                       <div className="title">Sign in</div>
                       <form className="sign_form" method="post">
                          <label>
                            Email:
                            <input type="email" placeholder="" name="email"></input>
                          </label>
                          <label>
                            Password:
                            <input type="password" placeholder="" name="password"></input>
                          </label>
                          <button className="submit-btn">Sign in</button>
                       </form>
                       
                    </div>
    )
}