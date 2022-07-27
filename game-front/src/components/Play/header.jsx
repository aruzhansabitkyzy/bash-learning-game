import './header.css';
import {Link} from 'react-router-dom';
export const Header = () => {
    return  (
        <div className="header">
            <div className="container">
                <div className = "logo">
                    <img src={require("../../icons/—Pngtree—black logo icon_4421941.png")} width="120px" height="120px"/>
                </div>
                <div className="account">
                   <Link to='/login'>Sign in</Link>
                </div>
            </div>
        </div>
    )
}