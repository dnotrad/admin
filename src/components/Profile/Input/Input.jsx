import React from 'react';
import s from "./Input.module.css";
import editImg from "./../../../assets/icons/edit.svg";
import doneImg from "./../../../assets/icons/done.svg";
import clearImg from "./../../../assets/icons/clear.svg";

const Input = (props) => {
    const [value, setValue] = React.useState(props.value || "0000-0000-0000-0000");
    const [currentValue, setCurrentValue] = React.useState(props.value || "0000-0000-0000-0000");
    const [isEdit, setIsEdit] = React.useState(false);
    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                {props.title}:
            </div>
            <div className={s.input} >
                <input
                    readOnly={isEdit ? "" : "readOnly"}
                    type="text"
                    value={isEdit ? currentValue : value}
                    onChange={(e) => setCurrentValue(e.target.value)} />
                <div className={s.input_imgs}>
                    {isEdit && <img src={doneImg} alt="doneImg" onClick={() => {
                        setValue(currentValue);
                        setIsEdit(false);
                    }
                    } />}
                    {isEdit
                        ? <img src={clearImg} alt="clearImg" onClick={() => setIsEdit(false)} />
                        : <img src={editImg} alt="editImg" onClick={() => setIsEdit(true)} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Input;