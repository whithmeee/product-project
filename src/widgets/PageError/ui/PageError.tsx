import cls from './PageError.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/button";


interface PageErrorProps {
    className?:string;
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();


    const reloadPage = () => {
        location.reload();
    };


    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <span className={cls.TextError}>
                 {t("Произошла непредвиденная ошибка")}
            </span>
            <Button onClick={reloadPage} className={cls.Button}>
                {t("Перезагрузить страницу")}
            </Button>
        </div>
    );
};
