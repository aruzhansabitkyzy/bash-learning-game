import './popup.css'
export const Popup = (props) => {
    const closePopup = () => {
        console.log(props.showPopup);
        props.setPopup(false);
    }
    return (
        <>
          <div className="popup">
               <div className="popup_container">
                    {/* <div className="popup_close" onCLick= {closePopup()}>
                   
                        <img src= {require('../../icons/free-icon-cancel-130887.png')} className ="close_icon" />
                    </div> */}
                    <div className="popup_content">
                         <p>Yaaaaay, congratulations! You passed a level!!!</p>
                    </div>
               </div>
          </div>
        </>
    )
}