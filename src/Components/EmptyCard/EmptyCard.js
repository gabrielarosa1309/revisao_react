import React from "react";
import "./emptycard.css";

const EmptyCard = () => {
    return (
        <React.Fragment>
            <div className="empty-task-card">
                <h1>Nenhuma tarefa encontrada</h1>
            </div>
        </React.Fragment>
    );
};

export default EmptyCard;