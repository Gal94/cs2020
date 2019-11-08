import React from 'react';
import { Button } from "./ModuleButton.styles";

const ModuleButton = ({name , link, ...props}) => (
    <Button {...props} onClick={()=> {
        window.location.href = `${link}`;
    }}>{name}</Button>
);

export default ModuleButton;