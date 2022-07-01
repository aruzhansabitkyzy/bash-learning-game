// import {Link, Router, Route} from 'react-router-dom';
// import '../Popup/popup.css';
// import {useState, useEffect} from 'react';
// import {SignUp} from '../SignUp/sign-up';


// export const MainPopup = (props) => {
    
//     const [step, setStep] = useState("all");
//     const changeStep = (step) =>{
//             setStep(step);
//             console.log(step + " step changed");
//      }
//      useEffect(() => {
//         console.log(step);
//      }, [])
//     return(
//     (props.isOpen) ? (

//         <div className="popup-container">
//                 <div className="close">
//                     <img src={require("./close.png")} onClick = {props.toggleGroup} className="close-icon"></img>
//                 </div>
//                 {step === " all" && (<Popup />)}
//         </div>
//     ) : null
   
//    )
// };