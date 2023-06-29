import React from 'react';
import  Nav  from './components/Nav';
import './mycss/style.css';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="container-fluid d-flex flex-column h-100">
                <div className="row justify-content-between">
                    <div className="col-12">
                        <Nav />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
