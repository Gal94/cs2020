import React from 'react';
import './ModuleButton.styles.scss'

const ModuleButton = ({name , link}) => (
    <button className='module-button' onClick={()=> {
        window.location.href = `${link}`;
    }}> {name} </button>
);

export default ModuleButton;