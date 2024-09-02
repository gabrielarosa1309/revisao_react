import React from "react";
import './taskcard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faX } from "@fortawesome/free-solid-svg-icons";

const TaskCard = ({ id, name, completed, onClick, onChange, checked, onEdit }) => {
    return (
        <React.Fragment>
            <div key={id} className={`task ${completed ? 'completed' : ''}`}>
                <label className="task-label">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={onChange}
                        id={`checkbox-${id}`}
                    />
                    <span className={`name ${completed ? 'completed' : ''}`}>{name}</span>
                </label>
                <button className={`edit-btn ${completed ? 'completed' : ''}`} onClick={() => onEdit && onEdit()}>
                    <FontAwesomeIcon color={completed ? "#FFFFFF" : "#1E123B"} icon={faPen} />
                </button>
                <button className={`delete-btn ${completed ? 'completed' : ''}`} onClick={onClick}>
                    <FontAwesomeIcon color={completed ? "#FFFFFF" : "#1E123B"} icon={faX} />
                </button>
            </div>
        </React.Fragment>
    );
};

export default TaskCard;
