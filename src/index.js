import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';

import * as data from './data/info';

import { Main } from './Main';
const root = ReactDOM.createRoot(document.querySelector('#root'));

let counter = 0;
setInterval(function () {
    const six = Math.floor(counter / 100000);
    const five = Math.floor(counter / 10000);
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    console.log(six, five, four, three, two, one)

    root.render(<Main {...data} one={one} two={two} three={three} four={four} five={five} six={six} />);

    counter++;
}, 1000)
