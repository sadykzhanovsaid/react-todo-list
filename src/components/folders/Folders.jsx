import "react"
import "./Folders.css"
import Folder from "../folder/Folder.jsx"
import Popup from "../popup/Popup.jsx"
import menuIcon from "/public/folders/menu.svg"
import addIcon from "/public/folders/add.svg"

function Folders({
                     openPopup,
                     setOpenPopup,
                     folders,
                     setFolders,
                     updateFolderTitle,
                     folderSelected,
                     setFolderSelected
                 }) {
    return (
        <div className="folders">
            <button className="folders__all">
                <img src={menuIcon} alt="menu icon" className="folders__all-icon"/>
                Все задачи
            </button>

            <div className="folders__list">
                {folders.map((el) => {
                    return <Folder
                        el={el}
                        key={el.id}
                        folders={folders}
                        setFolders={setFolders}
                        updateFolderTitle={updateFolderTitle}
                        folderSelected={folderSelected}
                        setFolderSelected={setFolderSelected}
                    />
                })}
            </div>

            <button className="folders__add" onClick={() => setOpenPopup(true)}>
                <img src={addIcon} alt="add icon" className="folders__add-icon"/>
                Добавить папку
            </button>

            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                folders={folders}
                setFolders={setFolders}
                folderSelected={folderSelected}
                setFolderSelected={setFolderSelected}
            />
        </div>
    )
}

export default Folders