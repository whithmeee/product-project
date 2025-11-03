import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const LoginForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const onChangeName = (name: string) => {
        setName(name);
    }

    const onChangePassword = (password: string) => {
        setPassword(password);
    }



    return <form className={cls.loginForm}>
        <h4 className={cls.loginTitle}>Вход</h4>
        <div>
            <label>Name</label>
            <Input autoFocus  placeholder='Name' className={cls.input} type="text" value={name} onChange={onChangeName} />
        </div>

        <div>
            <label>Password</label>
            <Input placeholder='Password' className={cls.input} type="password" value={password} onChange={onChangePassword} />
        </div>

        <Button className={cls.loginBtn}>Войти</Button>
    </form>
};

