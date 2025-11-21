import {useState, useEffect} from "react"
import "./App.css"
import Folders from "./components/folders/Folders.jsx"
import Tasks from "./components/tasks/Tasks.jsx"

function App() {
    const [openPopup, setOpenPopup] = useState(false)
    const [add, setAdd] = useState(false)
    const [folders, setFolders] = useState([])
    const [folderSelected, setFolderSelected] = useState("")

    useEffect(() => {
        const storedFolders = JSON.parse(localStorage.getItem("folders"))
        const storedFolderSelected = JSON.parse(localStorage.getItem("folderSelected"))
        if (storedFolders !== null) {
            setFolders(storedFolders)
        }
        if (storedFolderSelected !== null) {
            setFolderSelected(storedFolderSelected)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("folders", JSON.stringify(folders))
        localStorage.setItem("folderSelected", JSON.stringify(folderSelected))
    }, [folders, folderSelected])

    function updateFolderTitle(newTitle, id) {
        if (newTitle.trim() === "") {
            const updated = folders.filter(el => el.id !== id);
            setFolders(updated);
            if (folders.length >= 2) {
                setFolderSelected("all")
            } else {
                setFolderSelected("")
            }
            return;
        }
        const updated = folders.map(el => el.id === id ? {...el, title: newTitle} : el);
        setFolders(updated);
    }

    return (
        <>
            <Folders
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                folders={folders}
                setFolders={setFolders}
                updateFolderTitle={updateFolderTitle}
                folderSelected={folderSelected}
                setFolderSelected={setFolderSelected}
            />
            <Tasks
                add={add}
                setAdd={setAdd}
            />
        </>
    )
}

export default App