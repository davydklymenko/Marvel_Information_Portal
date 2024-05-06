import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Spinner from "../components/spinner/Spinner";
import AppHeader from "../components/appHeader/AppHeader";

const Page404 = lazy(() => import('../pages/404/404'));
const MainPage = lazy(() => import('../pages/mainPage'));
const ComicsPage = lazy(() => import('../pages/comicsPage'));
const SingleComicPage = lazy(() => import('../pages/singleComicPage/singleComicPage'));

const App = () => {

  return (
    <BrowserRouter>
        <div className="app">
          <AppHeader/>
          <main>
            <Suspense fallback={<Spinner/>}>
              <Routes>
                <Route path="/" 
                      element={<MainPage/>}/>
                <Route index 
                      path="/comics" 
                      element={<ComicsPage />}/>
                <Route index 
                      path="/comics/:comicId" 
                      element={<SingleComicPage />}/>
                <Route path="*"
                      element={<Page404 />}/>
              </Routes>
            </Suspense>
          </main>
      </div>
    </BrowserRouter>
  )
}

export default App;