import React, {useState} from "react"
import "./Task.css"
import deleteIcon from "/public/task/delete.svg"
import {FaCheck} from "react-icons/fa6"

function Task({title, completed}) {
    const [changeCompleted, setChangeCompleted] = useState(completed)

    return (
        <div className="task">
            <button onClick={() => setChangeCompleted(!changeCompleted)}
                    className={changeCompleted ? "task__completed-active" : "task__completed"}>
                <FaCheck className={changeCompleted ? "task__completed-icon-active" : "task__completed-icon"}
                         size={11}/>
            </button>
            <p className="task__title">{title}</p>
            <img src={deleteIcon} alt="delete icon" className="task__delete"/>
        </div>
    );
}

export default Task;