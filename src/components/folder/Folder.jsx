import React from "react"
import "./Folder.css"
import deleteIcon from "/public/folder/delete.svg"

function Folder({
                    el,
                    folders,
                    setFolders,
                    updateFolderTitle,
                    folderSelected,
                    setFolderSelected,
                }) {

    function deleteFolder(id, e) {
        e.stopPropagation();
        setFolders(folders.filter(el => el.id !== id))
        if (folders.length >= 2) {
            setFolderSelected("all")
        } else {
            setFolderSelected("")
        }
    }

    return (
        <div className="folder" onClick={() => setFolderSelected(el.id)}>
            <div className="folder__color" style={el.color}></div>
            <input
                className="folder__title"
                value={el.title}
                onChange={(e) => updateFolderTitle(e.target.value, el.id)}
            />
            <img
                onClick={(e) => deleteFolder(el.id, e)}
                src={deleteIcon} alt="delete icon"
                className="folder__icon"
            />
        </div>

    );
}

export default Folder;