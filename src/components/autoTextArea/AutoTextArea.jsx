import React, {useRef, useEffect} from "react"
import "./AutoTextArea.css"

function AutoTextArea({
                          el,
                          folderId,
                          updateTaskTitle
}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
    }, [el.title]);

    return (
        <textarea
            ref={ref}
            value={el.title}
            onChange={(e) => updateTaskTitle(folderId, el.id, e.target.value)}
        />
    );
}

export default AutoTextArea;