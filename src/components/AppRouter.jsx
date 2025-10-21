import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes.js";
import {AuthContext} from "../context/index.js";
import Loader from "./UI/Loader/Loader.jsx";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading) {
        return <Loader/>
    }
    const routes = isAuth ? privateRoutes : publicRoutes;
    const fallbackTo = isAuth ? "/posts" : "/login";

    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                />
            ))}
            <Route path="/*" element={<Navigate to={fallbackTo} replace />} />
        </Routes>
    );
};

export default AppRouter;