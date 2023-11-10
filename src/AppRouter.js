import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav>
                    <div>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="https://github.com/seokju-na/react-thermal-printer">React-To-Print</Link>
                        </div>
                        <div>
                            <Link to="https://github.com/seokju-na/react-thermal-printer">PrintJS</Link>
                        </div>
                        <div>
                            <Link to="https://github.com/seokju-na/react-thermal-printer">react-thermal-printer</Link>
                        </div>
                    </div>
                </nav>

                <hr />

                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
