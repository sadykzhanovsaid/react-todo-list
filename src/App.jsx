import {useState, useEffect} from "react"
import "./App.css"
import Folders from "./components/folders/Folders.jsx"
import Tasks from "./components/tasks/Tasks.jsx"

function App() {
    const [openPopup, setOpenPopup] = useState(false)
    const [add, setAdd] = useState(false)
    const [folders, setFolders] = useState([])

    useEffect(() => {
        const storedFolders = JSON.parse(localStorage.getItem("folders"))
        if (storedFolders !== null) {
            setFolders(storedFolders)
        }
    }, [])

    function updateFolderTitle(newTitle, id) {
        if (newTitle.trim() === "") {
            const updated = folders.filter(el => el.id !== id);
            setFolders(updated);
            // if (folders.length >= 2) {
            //     setCategory("all")
            // } else {
            //     setCategory("")
            // }
            return;
        }
        const updated = folders.map(el => el.id === id ? {...el, title: newTitle} : el);
        setFolders(updated);
    }

    useEffect(() => {
        localStorage.setItem("folders", JSON.stringify(folders))
    }, [folders])

    return (
        <>
            <Folders
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                folders={folders}
                setFolders={setFolders}
                updateFolderTitle={updateFolderTitle}
            />
            <Tasks
                add={add}
                setAdd={setAdd}
            />
        </>
    )
}

export default App