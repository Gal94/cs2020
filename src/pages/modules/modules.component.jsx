import React from 'react';
import {ModulesContainer, ModulesDisplayContainer, Text} from "./modules.styles";
import ModuleButton from "../../components/module-button/ModuleButton.component";

const Modules = ({modules}) => {
    return (
        <ModulesContainer>
            <h2>קורסים לבחירה:</h2>
            <Text>קורסים המסומנים בכוכבית יצאו מתכנית הלימודים נכון לשנת 2019</Text>
            <ModulesDisplayContainer>
        {
            modules.map((module) => (
                <ModuleButton key={module.id} {...module} />
            ))
        }
            </ModulesDisplayContainer>
        </ModulesContainer>
        );
};

export default Modules;