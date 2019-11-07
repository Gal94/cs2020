import React from 'react';
import './ModuleButton.styles.scss'

const ModuleButton = ({name , link, homeButton}) => (
    <button className={`${homeButton ? 'home-link': ''} module-button`} onClick={()=> {
        window.location.href = `${link}`;
    }}>{name}</button>
);

export default ModuleButton;
