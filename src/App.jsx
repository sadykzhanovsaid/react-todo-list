import {useState} from "react"
import "./App.css"
import Folders from "./components/folders/Folders.jsx"
import Tasks from "./components/tasks/Tasks.jsx"

function App() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Folders open={open} setOpen={setOpen}/>
            <Tasks/>
        </>
    )
}

export default App