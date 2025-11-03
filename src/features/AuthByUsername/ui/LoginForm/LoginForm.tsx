import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { memo, useCallback } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import Text, { TextTheme } from 'shared/ui/Text/Text';

export const LoginForm = memo(() => {
    const dispatch = useDispatch();
    const {username, password, isLoading, error} = useSelector(getLoginState);
    
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]); 

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);


    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, username, password]);

    return <form className={cls.loginForm}>
        <Text className={cls.loginTitle} text={"Форма авторизации"}/>
        {error && <Text text={error} theme={TextTheme.ERROR}/>}
        <div>
            <label>Name</label>
            <Input autoFocus  placeholder='Name' className={cls.input} type="text" value={username} onChange={onChangeUsername}  />
        </div>

        <div>
            <label>Password</label>
            <Input placeholder='Password' className={cls.input} type="password" value={password} onChange={onChangePassword} />
        </div>

        <Button disabled={isLoading} onClick={onLoginClick} className={cls.loginBtn}>Войти</Button>
    </form>
});

