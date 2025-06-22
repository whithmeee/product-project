import cls from './ThemeSwitcher.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import {FC} from "react";
import { useTheme } from "app/providers/ThemeProvider";
import MoonIcon from 'shared/assets/icons/moon.svg';
import SunIcon from  'shared/assets/icons/sun.svg';


interface ThemeSwitcherProps {
    className?:string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
    const {className} = props;
    const { toggleTheme, theme } = useTheme();
    return (
        <button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === 'dark' ? <MoonIcon/> : <SunIcon/> }
        </button>
    );
};
