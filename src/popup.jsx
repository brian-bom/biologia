import React, {useState} from 'react'
import ad from './assets/ad.jpg'
import x from './assets/x.png'
import gambiarra from './assets/gambiarra.png'

function Popup(){
    const [showPopup, setShowPopup] = useState(null);

    return(
        <>
        <img className='img-invisivel' onLoad={() => setShowPopup(true)} src={gambiarra} alt="" />
        {showPopup && (
            <div className='popup'>
                <header>
                    <img src={x} className="fechar" onClick={() => setShowPopup(null)}/>
                </header>
                <div className='popup-img'>
                    <img src={ad} alt="" />
                </div>
            </div>
        )}
        </>
    );
}

export default Popup;
