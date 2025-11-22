import {useState} from "react"
import "./Tasks.css"
import Task from "../task/Task.jsx"
import Added from "../added/Added.jsx"
import changeIcon from "/public/tasks/change.svg"
import addIcon from "/public/tasks/add.svg"
import Empty from "../empty/Empty.jsx"
import TaskMain from "../taskMain/TaskMain.jsx"
import TasksAll from "../tasksAll/TasksAll.jsx"

function Tasks({
                   add,
                   setAdd,
                   folderSelected,
                   folders,
                   updateFolderTitle
               }) {
    return (
        <>
            {folderSelected === "all" ?
                <TasksAll
                    add={add}
                    setAdd={setAdd}
                    folders={folders}
                    updateFolderTitle={updateFolderTitle}
                /> :
                folderSelected === "" ? <Empty/> :
                <TaskMain
                    add={add}
                    setAdd={setAdd}
                    folderSelected={folderSelected}
                    folders={folders}
                    updateFolderTitle={updateFolderTitle}
                />
            }
        </>
    )
}

export default Tasks