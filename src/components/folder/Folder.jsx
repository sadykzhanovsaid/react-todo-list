import React from "react"
import "./Folder.css"
import deleteIcon from "/public/folder/delete.svg"

function Folder({color, title}) {
    return (
        <div className="folder">
            <div className="folder__color" style={{background: color}}></div>
            <p className="folder__title">{title}</p>
            <img src={deleteIcon} alt="delete icon" className="folder__icon"/>
        </div>

    );
}

export default Folder;