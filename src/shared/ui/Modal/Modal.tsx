import cls from './Modal.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {Portal} from "shared/ui/Portal/Portal";


interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
    const {className, isOpen, onClose, children} = props;

    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const handleClickContent = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, 500);
        }
    }, [onClose]);


    // !!Новые ссылки
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler])


    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [isOpen, handleKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div onClick={closeHandler} className={cls.overlay}>
                    <div onClick={handleClickContent} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
