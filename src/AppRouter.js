import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <nav>
                    <div>
                        <div style={{marginBottom:"20px"}}>
                            <Link style={{textDecoration:"none"}}  to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/">React-To-Print</Link>
                            <h5>https://github.com/seokju-na/react-thermal-printer</h5>
                        </div>
                        <div>
                            <Link to="/">PrintJS</Link>
                            <h5>https://github.com/seokju-na/react-thermal-printer</h5>
                        </div>
                        <div>
                            <Link to="/">react-thermal-printer</Link>
                            <h5>https://github.com/seokju-na/react-thermal-printer</h5>
                        </div>
                        <div>
                            <Link to="/">esc-pos-encoder usb bluetooth-serial-port</Link>
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
