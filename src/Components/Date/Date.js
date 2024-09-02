import React from "react";
import './date.css'

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Title = () => {
    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formattedDate = today.toLocaleDateString('pt-BR', options);

    const dayOfWeek = capitalizeFirstLetter(formattedDate.split(',')[0]);
    const day = formattedDate.split(' ')[1];
    const month = capitalizeFirstLetter(formattedDate.split(' ')[3]);

    return (
        <React.Fragment>
            <h1>
                {dayOfWeek}, <strong>{day}</strong> de {month}
            </h1>
        </React.Fragment>
    );
};

export default Title;