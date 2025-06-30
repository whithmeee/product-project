import {RouteProps} from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";
export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    NotFountPage = "NotFoundPage",
}
export const RouterPath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.NotFountPage]: "*",
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
    [AppRouters.NotFountPage]: {
        path: RouterPath.NotFoundPage,
        element: <NotFoundPage/>
    }
}
