import React from 'react';
import "./background.css"

const Background = ({ children }) => {
    return (
        <React.Fragment>
            <div className="background">
                {children}
            </div>
        </React.Fragment>
    );
};

export default Background;