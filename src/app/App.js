import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppHeader from '../appHeader/appHeader';
import AppWelcome from '../appWelcome/appWelcome';
import TeachersList from '../teachersList/teachersList';
import NoNameList from '../nonameList/noname';
import MartaList from '../martaList/martaList';

function App() {
    return (
        <BrowserRouter>
            <header>
                <AppHeader/>
            </header>

                <main>
                    <Routes>
                        <Route path='/' element={<AppWelcome/>} exact/>
                        <Route path='/teachers' element={<TeachersList/>} exact />
                        <Route path='/noname' element={<NoNameList/>} exact />
                        <Route path='/marta' element={<MartaList/>} exact />
                    </Routes>
                </main>
            
        </BrowserRouter>
    );
}

export default App;
