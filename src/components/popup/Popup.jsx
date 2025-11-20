import React, {useState} from "react"
import "./Popup.css"
import closeIcon from "/public/popup/close.svg"

function Popup({openPopup, setOpenPopup}) {
    const [color, setColor] = useState({
        background: "rgba(201, 209, 211, 1)"
    })

    function changeColor(rgba) {
        setColor({
            background: rgba
        })
    }

    return (
        <div className={openPopup ? "popup__active" : "popup"}>
            <img onClick={() => setOpenPopup(false)} src={closeIcon} alt="close icon" className="popup__close"/>
            <input className="popup__input" type="text" placeholder="Название папки"/>
            <div className="popup__colors">
                <div onClick={() => changeColor("rgba(201, 209, 211, 1)")}
                     className={color.background !== "rgba(201, 209, 211, 1)" ? "popup__color popup__color1" : "popup__color popup__color1 popup__color1-active"}></div>
                <div onClick={() => changeColor("rgba(66, 184, 131, 1)")}
                     className={color.background !== "rgba(66, 184, 131, 1)" ? "popup__color popup__color2" : "popup__color popup__color2 popup__color2-active"}></div>
                <div onClick={() => changeColor("rgba(100, 196, 237, 1)")}
                     className={color.background !== "rgba(100, 196, 237, 1)" ? "popup__color popup__color3" : "popup__color popup__color3 popup__color3-active"}></div>
                <div onClick={() => changeColor("rgba(255, 187, 204, 1)")}
                     className={color.background !== "rgba(255, 187, 204, 1)" ? "popup__color popup__color4" : "popup__color popup__color4 popup__color4-active"}></div>
                <div onClick={() => changeColor("rgba(182, 230, 189, 1)")}
                     className={color.background !== "rgba(182, 230, 189, 1)" ? "popup__color popup__color5" : "popup__color popup__color5 popup__color5-active"}></div>
                <div onClick={() => changeColor("rgba(195, 85, 245, 1)")}
                     className={color.background !== "rgba(195, 85, 245, 1)" ? "popup__color popup__color6" : "popup__color popup__color6 popup__color6-active"}></div>
                <div onClick={() => changeColor("rgba(9, 1, 26, 1)")}
                     className={color.background !== "rgba(9, 1, 26, 1)" ? "popup__color popup__color7" : "popup__color popup__color7 popup__color7-active"}></div>
                <div onClick={() => changeColor("rgba(255, 100, 100, 1)")}
                     className={color.background !== "rgba(255, 100, 100, 1)" ? "popup__color popup__color8" : "popup__color popup__color8 popup__color8-active"}></div>
            </div>
            <button className="popup__add">Добавить</button>
        </div>
    );
}

export default Popup;