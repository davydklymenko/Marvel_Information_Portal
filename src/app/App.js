import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHeader from "../components/appHeader/AppHeader";

import { MainPage, ComicsPage } from '../pages';

const App = () => {

  return (
    <BrowserRouter>
        <div className="app">
          <AppHeader/>
          <main>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route index path="/comics" element={<ComicsPage />}/>
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  )
}

export default App;