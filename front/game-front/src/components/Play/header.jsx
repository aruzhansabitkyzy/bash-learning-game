import './header.css';
import {Link} from 'react-router-dom';
export const Header = () => {
    return  (
        <div className="header">
            <div className="container">
                <div className = "logo_pic">
                    <img src={require("../../icons/logo2.png")} width="120px" height="100px"/>
                </div>
                {/* <div className="account">
                   <Link to='/login'>Sign in</Link>
                </div> */}
            </div>
        </div>
    )
}