import React from 'react';
import {InputBase} from "@mui/material";
import {useFormContext} from "react-hook-form";
import clsx from "clsx";
import styles from '../AuthDialog.module.scss'

type InputType = 'text' | 'password'

interface InputFieldProps {
    name:string,
    label: string,
    placeholder?: string,
    type?: InputType
}

const InputField: React.FC<InputFieldProps> = ({name,placeholder, type}) => {
    const { register, formState } = useFormContext();

    return (
        <div className={clsx(styles.form__input, !!formState.errors[name] && styles.form__error )}>
            <InputBase
                {...register(name)}
                type={type}
                placeholder={placeholder}
            />
            {formState.errors[name]?.message && <span>{formState.errors[name]?.message as React.ReactNode}</span>}
        </div>
    );
};

export default InputField;