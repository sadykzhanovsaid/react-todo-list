import React from "react"
import "./Folder.css"
import deleteIcon from "/public/folder/delete.svg"

function Folder({
                    el,
                    folders,
                    setFolders,
                    updateFolderTitle
                }) {

    function deleteFolder(id) {
        setFolders(folders.filter(el => el.id !== id))
    }

    return (
        <div className="folder">
            <div className="folder__color" style={el.color}></div>
            <input
                className="folder__title"
                value={el.title}
                onChange={(e) => updateFolderTitle(e.target.value, el.id)}
            />
            <img
                onClick={() => deleteFolder(el.id)}
                src={deleteIcon} alt="delete icon"
                className="folder__icon"
            />
        </div>

    );
}

export default Folder;