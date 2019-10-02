import React from 'react';
import './modules.styles.scss';
import ModuleButton from "../../components/module-button/ModuleButton.component";

const Modules = ({modules}) => {
    return (
        <div className='modules'>
            <h2>קורסים לבחירה:</h2>
            <p className='module-text'>קורסים המסומנים בכוכבית יצאו מתכנית הלימודים נכון לשנת 2019</p>
            <div className='modules-display'>
        {
            modules.map((module) => (
                <ModuleButton key={module.id} {...module} />
            ))
        }
            </div>
        </div>
        );
};

export default Modules;