import React from 'react';
import cls from "./Button.module.scss";
import {classNames} from "shared/lib/classNames/classNames";

interface ButtonProps {
    children?: string;
    className?: string;
    onClick?: () => void;
}

export const Button = ({children, className, onClick}: ButtonProps) => {
    return (
        <button onClick={onClick} className={classNames(cls.button, {}, [className])}>
            {children}
        </button>
    );
};
