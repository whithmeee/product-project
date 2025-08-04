import React, { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";
import {Loader} from "shared/ui/Loader/Loader";

const App = () => {
   const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
          <Suspense fallback={() => <Loader/>}>
              <Header/>
              <div className={'content-page'}>
                  <Sidebar/>
                  <AppRouter/>
              </div>
          </Suspense>
        </div>
    );
};

export default App;
