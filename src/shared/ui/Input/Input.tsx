import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import cls from './Input.module.scss';
import { classNames } from "shared/lib/classNames/classNames";

type HTMLInputProps =  Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">


interface InputProps extends HTMLInputProps {
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    className?: string;
}

export const Input = memo((props: InputProps) => {

 const {value, onChange, className, type = "text", placeholder, autoFocus, ...otherProps} = props;
 const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  };

  useEffect(() => {
    if (autoFocus) {
        inputRef.current.focus();
    }
  }, [autoFocus]);

    return <input autoFocus value={value} ref={inputRef} onChange={handleChange} type={type} className={classNames(cls.input, {}, [className])} placeholder={placeholder} {...otherProps} />
});