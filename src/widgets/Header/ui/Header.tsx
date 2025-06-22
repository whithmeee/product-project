import React from 'react';
import cls from './Header.module.scss';
import { Button } from "shared/button";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";

export const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.headerMmenu}>
                <nav>
                    <ul>
                        <li>
                            <AppLink to={'/'}>
                                Главная
                            </AppLink>
                        </li>

                        <li>
                            <AppLink to={'/about'}>
                                О нас
                            </AppLink>
                        </li>
                    </ul>
                </nav>

               <div className={cls.headerButton}>
                   <LangSwitcher/>
                   <ThemeSwitcher/>
                   <Button className={cls.login}>Войти</Button>
               </div>
            </div>
        </header>
    );
};

