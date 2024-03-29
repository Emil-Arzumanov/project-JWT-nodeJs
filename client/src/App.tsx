import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {loggedRoutes, routes} from "./routes/routing";


function App() {

    return (
        <BrowserRouter>
            {
                localStorage.getItem("userToken")
                    ?
                    <Routes>
                        {loggedRoutes.map(elem =>
                            <Route path={elem.path}
                                   element={<elem.component/>}
                                   key={elem.path}/>
                        )}
                        <Route
                            path="*"
                            element={<Navigate to="/homepage" replace />}
                        />
                    </Routes>
                    :
                    <Routes>
                        {routes.map(elem =>
                            <Route path={elem.path}
                                   element={<elem.component/>}
                                   key={elem.path}/>
                        )}
                        <Route
                            path="*"
                            element={<Navigate to="/" replace />}
                        />
                    </Routes>
            }
        </BrowserRouter>
    );
}

export default App;

