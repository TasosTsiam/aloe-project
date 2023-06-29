/* eslint-disable no-undef */

import React from 'react';
import Homepage from './Homepage';
import Login from './Login';
import Order from './Order';
import { Routes, Route} from 'react-router-dom';


function Main() {

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default Main;

/* eslint-disable no-undef */