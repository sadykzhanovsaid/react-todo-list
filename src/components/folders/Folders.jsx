import "react"
import "./Folders.css"
import Folder from "../folder/Folder.jsx"
import menuIcon from "/public/folders/menu.svg"
import addIcon from "/public/folders/add.svg"

function Folders() {
    return (
        <div className="folders">
            <button className="folders__all">
                <img src={menuIcon} alt="menu icon" className="folders__all-icon"/>
                Все задачи
            </button>

            <div className="folders__list">
                <Folder color="rgba(66, 184, 131, 1)" title="Покупки"/>
                <Folder color="rgba(100, 196, 237, 1)" title="Фронтенд"/>
                <Folder color="rgba(255, 187, 204, 1)" title="Книги"/>
            </div>

            <button className="folders__add">
                <img src={addIcon} alt="add icon" className="folders__add-icon"/>
                Добавить папку
            </button>
        </div>
    )
}

export default Folders