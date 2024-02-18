import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Edit from "./page/Edit";
import Preview from "./page/Preview";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="" element={<Edit/>}></Route>
            <Route path="/preview" element={<Preview/>}></Route>
        </Routes>
    </BrowserRouter>
}

export default App;
