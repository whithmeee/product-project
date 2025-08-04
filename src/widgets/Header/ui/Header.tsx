import React, {useCallback, useState} from 'react';
import cls from './Header.module.scss';
import { Button } from "shared/ui/button";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import {Modal} from "shared/ui/Modal/Modal";
import {useTranslation} from "react-i18next";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {t} = useTranslation();

    const handleOpenModal = useCallback(() => {
        setIsOpen(prevState =>  !prevState);
    }, []);
    return (
        <header className={cls.header}>
            <div className={cls.headerMmenu}>
               <div className={cls.headerButton}>
                   <LangSwitcher/>
                   <ThemeSwitcher/>
                   <Button onClick={handleOpenModal} className={cls.login}>{t("Войти")}</Button>
               </div>
            </div>

            <Modal isOpen={isOpen} onClose={handleOpenModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, minus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, minus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, minus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, minus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, minus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, minus.
            </Modal>
        </header>
    );
};

