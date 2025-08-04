import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import React, {useState} from "react";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";


interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const {t} = useTranslation();
    const toggleCollapsed = () => {
        setCollapsed(prevState => !prevState);
    }
    return (
        <div data-testid={"sidebar"} className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <nav>
                <ul>
                    <li>
                        <AppLink to={'/'}>
                            {t("Главная")}
                        </AppLink>
                    </li>

                    <li>
                        <AppLink to={'/about'}>
                            {t("О нас")}
                        </AppLink>
                    </li>
                </ul>
            </nav>
            <button data-testid={"toggle-sidebar"} onClick={toggleCollapsed}>toggle</button>
        </div>
    );
};
