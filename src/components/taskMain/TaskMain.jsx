import React from "react"
import "./TaskMain.css"
import changeIcon from "/public/tasks/change.svg"
import Task from "../task/Task.jsx"
import Added from "../added/Added.jsx"
import addIcon from "/public/tasks/add.svg"

function TaskMain({
                      add,
                      setAdd,
                      folderSelected,
                      folders,
                      setFolders,
                      updateFolderTitle,
                      deleteTask,
                      toggleTaskCompleted
                  }) {
    const folderMain = folders.find(el => el.id === folderSelected)
    return (
        <div className="taskMain">
            <div className="taskMain__title" style={{color: folderMain.color.background}}>
                <input
                    style={{color: folderMain.color.background}}
                    value={folderMain.title}
                    onChange={(e) => updateFolderTitle(e.target.value, folderMain.id)}
                />
                <button>
                    <img src={changeIcon} alt="change icon" className="taskMain__change-icon"/>
                </button>
            </div>
            <div className="taskMain__line"></div>
            <div className="taskMain__">
                {folderMain.tasks.map((el) => {
                    return <Task
                        el={el}
                        key={el.id}
                        folders={folders}
                        setFolders={setFolders}
                        deleteTask={deleteTask}
                        folderId={folderMain.id}
                        toggleTaskCompleted={toggleTaskCompleted}
                    />
                })}
            </div>
            {add ? <Added
                add={add}
                setAdd={setAdd}
                folders={folders}
                setFolders={setFolders}
                folderMain={folderMain}
            /> : <button onClick={() => setAdd(true)} className="taskMain__add">
                <img src={addIcon} alt="add icon" className="taskMain__add-icon"/>
                Новая задача
            </button>}
        </div>
    );
}

export default TaskMain