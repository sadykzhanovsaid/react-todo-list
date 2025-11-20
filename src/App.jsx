import {useState} from "react"
import "./App.css"
import Folders from "./components/folders/Folders.jsx"
import Tasks from "./components/tasks/Tasks.jsx"

function App() {
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <>
            <Folders openPopup={openPopup} setOpenPopup={setOpenPopup}/>
            <Tasks/>
        </>
    )
}

export default App