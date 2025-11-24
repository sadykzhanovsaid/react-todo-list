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

    function toggleTaskCompleted(folderId, taskId) {
        setFolders(el =>
            el.map(folder =>
                folder.id === folderId
                    ? {
                        ...folder,
                        tasks: folder.tasks.map(task =>
                            task.id === taskId
                                ? { ...task, completed: !task.completed }
                                : task
                        )
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
                    setFolders={setFolders}
                    updateFolderTitle={updateFolderTitle}
                    deleteTask={deleteTask}
                    toggleTaskCompleted={toggleTaskCompleted}
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
                    toggleTaskCompleted={toggleTaskCompleted}
                />
            }
        </>
    )
}

export default Tasks