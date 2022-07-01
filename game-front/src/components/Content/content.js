import './content.css';
import {Link} from 'react-router-dom';

export const Content = () => {
    return(
        <div className="content-container">
             <div className="terminal">
                <div className="os">
                    <select className='select' defaultValue = "Linux">
                        <option value="unix-linux">Unix</option>
                        <option value="windows">Windows</option>
                    </select>
                </div>
                <div className="code">
                    <span id="cursor"></span>
                </div>
             </div>
             <div className="intro">
                <div className="headline">
                    <p>Master terminal commands</p>
                </div>
                <div className="intro-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
                <Link to="/play" style={{textDecoration:"none"}}>
                <div className="btn">
                        <p>Start</p>
                </div>
                </Link>
             </div>
        </div>
    )
}