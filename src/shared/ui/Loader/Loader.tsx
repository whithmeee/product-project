import cls from './Loader.module.scss';
import { classNames } from "shared/lib/classNames/classNames";


interface LoaderProps {
    className?:string;
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <span className={classNames(cls.LoaderContainer, {}, [className])}>
            <span className={classNames(cls.Loader, {}, [className])}></span>
        </span>
    );
};
