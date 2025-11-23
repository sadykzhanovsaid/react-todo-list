import React, {useState} from "react"
import "./Added.css"

function Added({
                   add,
                   setAdd,
                   folders,
                   setFolders,
                   folderMain
               }) {
    const [title, setTitle] = useState("")

    function addTask(title, id) {
        if (title.trim()) {
            const updated = folders.map(el => {
                if (!el || !el.tasks) return el;

                if (el.id === id) {
                    return {
                        ...el,
                        tasks: [...el.tasks, {
                            id: Date.now(),
                            title,
                            completed: false
                        }]
                    };
                }

                return el;
            });

            setFolders(updated);
            setAdd(false)
        }
    };

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            addTask(title, folderMain.id)
            setTitle("")
        }
    }

    return (
        <div className="added">
            <input
                type="text"
                className="added__input"
                placeholder="Текст задачи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
            />
            <div className="added__other">
                <button onClick={() => addTask(title, folderMain.id)} className="added__add">Добавить задачу</button>
                <button onClick={() => setAdd(false)} className="added__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default Added;