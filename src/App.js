import React from 'react';
import  Nav  from './components/Nav';
import  Main  from './components/Main';
import  Footer  from './components/Footer';
import './mycss/style.css';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="parent-container container-fluid d-flex flex-column h-100">
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
                        <Nav />
                    </div>
                </div>
                <div className="row flex-grow-1">
                    <div className="col-12 align-self-center">
                        <Main />
                    </div>
                    <div className="col-12 align-self-end">
                        <Footer/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
