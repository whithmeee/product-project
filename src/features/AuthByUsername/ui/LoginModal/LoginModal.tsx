import { Modal } from "shared/ui/Modal/Modal"
import cls from './LoginModal.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModal {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}


export const LoginModal = (props: LoginModal) => {
    const {isOpen, onClose, className} = props;


    return <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
        <LoginForm />
    </Modal>
}