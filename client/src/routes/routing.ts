import React from "react";
import MainPage from "../pages/MainPageComp/MainPage";
import RegistrationPage from "../pages/RegPageComp/RegistrationPage";
import AuthPage from "../pages/AuthPageComp/AuthPage";
import HomePage from "../pages/HomePageComp/HomePage";

export interface IRoute {
    path: string;
    component: React.ComponentType;
}

export enum RouteNames {
    MAINPAGE = '/',
    REGPAGE = '/registration',
    LOGPAGE = '/login'
}

export const routes: IRoute[] = [
    {
        path: RouteNames.MAINPAGE,
        component: MainPage
    },
    {
        path: RouteNames.REGPAGE,
        component: RegistrationPage
    },
    {
        path: RouteNames.LOGPAGE,
        component: AuthPage
    }
]

export enum LoggedRouteNames {
    HOMEPAGE = '/homepage'
}

export const loggedRoutes: IRoute[] = [
    {
        path: LoggedRouteNames.HOMEPAGE,
        component: HomePage
    }
]