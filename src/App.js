import React from 'react';
import  Nav  from './components/Nav';
import  Main  from './components/Main';
import  Footer  from './components/Footer';
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
                    <div className="row flex-grow-1">
                        <div className="col-12 align-self-center">
                            <Main />
                        </div>
                        <div className="col-12 align-self-end">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
