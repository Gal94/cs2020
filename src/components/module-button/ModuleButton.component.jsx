import React from 'react';
import './ModuleButton.styles.scss'

const ModuleButton = ({name , link, homeButton, icon}) => (
    <button className={`${homeButton ? 'home-link': ''} module-button`} onClick={()=> {
        window.location.href = `${link}`;
    }}>{name}  <span style={{marginRight: `0.2rem`}}>{icon}</span> </button>
);

export default ModuleButton;