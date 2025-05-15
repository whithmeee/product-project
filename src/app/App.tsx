import React from 'react';
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "helpers/classNames/classNames";
import { AppRouter } from "app/providers/router";

const App = () => {
   const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <AppRouter/>
        </div>
    );
};

export default App;
