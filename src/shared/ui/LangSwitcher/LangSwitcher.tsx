import cls from './LangSwitcher.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";


interface LangSwitcherProps {
    className?:string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru").then(r => r) ;
    }
    return (
        <button onClick={toggle} className={classNames(cls.LangSwitcher, {}, [className])}>
            {i18n.language === 'ru' ? <span>🇷🇺</span> : <span>🇺🇸</span>}
          <span>{t("ru")}</span>
        </button>
    );
};
