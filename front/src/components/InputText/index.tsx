import React from "react";
import "./style.scss";

type InputText = {
    placeholder?: string;
    name: string;
    className?: string;
    value: string;
    onChange: (value: string) => void
}

const InputText: React.FC<InputText> = (props) => {
    return (
        <div className="inputText">
            <input
                type="text"
                name={props.name}
                className={props.className}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}

export default InputText;