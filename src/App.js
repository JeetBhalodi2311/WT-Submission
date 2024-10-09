import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/Dashboard';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from './Dashboard/Dashboard-Items/MainContent';
import Faculty from './Content-pages/Faculty';
import Student from './Content-pages/Student';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />}>
                        <Route path="/" element={<MainContent />} />
                        <Route path='/faculty' element={<Faculty/>} />
                        <Route path='/student' element={<Student/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
