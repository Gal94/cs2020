import React from 'react';
import './ModuleButton.styles.scss'

const ModuleButton = ({name , link, homeButton, icon}) => (
    <button className={`${homeButton ? 'home-link': ''} module-button`} onClick={()=> {
        window.location.href = `${link}`;
}}>{name}{icon ? (<span style={{marginRight: `0.2rem`}}>{icon}</span>):null} </button>
);

export default ModuleButton;