import {RouteProps} from "react-router-dom";
import { MainPage } from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
}
export const RouterPath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about'
};


export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RouterPath.main,
        element: <MainPage/>,
    },
    [AppRouters.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage/>
    },
}
