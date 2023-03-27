import React, {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from "./components/AuthPageComp/AuthPage";
import MainPage from "./components/MainPageComp/MainPage";
import RegistrationPage from "./components/RegPageComp/RegistrationPage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/auth" element={<AuthPage/>}></Route>
          <Route path="/registration" element={<RegistrationPage/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}
{/*
<Route element={<div></div>}>
            <Route path="/AdminCompanies" element={<div></div>}/>
            <Route path="/AdminUsers" element={<div></div>}/>
          </Route>
*/}

export default App;

