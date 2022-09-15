import React from 'react';
import SimpleCounter from './components/SimpleCounter';
import Footer from './components/Footer';

export function Main({ one, two , three, four, five, six, footer }) {
    return (
        <>
            <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />,
            <Footer footer={footer} />
        </>
    )
}