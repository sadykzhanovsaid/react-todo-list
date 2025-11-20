import React from "react"
import "./Folder.css"
import deleteIcon from "/public/folder/delete.svg"

function Folder({
                    el,
                    folders,
                    setFolders
                }) {

    function deleteFolder(id) {
        setFolders(folders.filter(el => el.id !== id))
    }

    return (
        <div className="folder">
            <div className="folder__color" style={el.color}></div>
            <p className="folder__title">{el.title}</p>
            <img
                onClick={() => deleteFolder(el.id)}
                src={deleteIcon} alt="delete icon"
                className="folder__icon"
            />
        </div>

    );
}

export default Folder;