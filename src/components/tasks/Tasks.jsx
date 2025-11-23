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
                   setFolders,
                   updateFolderTitle
               }) {

    function deleteTask(folderId, taskId) {
        setFolders(el =>
            el.map(folder =>
                folder.id === folderId
                    ? {
                        ...folder,
                        tasks: folder.tasks.filter(task => task.id !== taskId)
                    }
                    : folder
            )
        );
    }
    
    return (
        <>
            {folderSelected === "all" ?
                <TasksAll
                    folders={folders}
                    updateFolderTitle={updateFolderTitle}
                    deleteTask={deleteTask}
                /> :
                folderSelected === "" ? <Empty/> :
                <TaskMain
                    add={add}
                    setAdd={setAdd}
                    folderSelected={folderSelected}
                    folders={folders}
                    setFolders={setFolders}
                    updateFolderTitle={updateFolderTitle}
                    deleteTask={deleteTask}
                />
            }
        </>
    )
}

export default Tasks