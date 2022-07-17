import React from "react";
import "./style.scss";

type InputText = {
    placeholder?: string
    name: string
    className?: string
}

const InputText: React.FC<InputText> = (props) => {
    return (
        <div className="inputText">
            <input
                type="text"
                name={props.name}
                className={props.className}
                placeholder={props.placeholder} />
        </div>
    )
}

export default InputText;