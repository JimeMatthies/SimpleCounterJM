import React from "react";
import PropTypes from "prop-types";

function SimpleCounter (counter){
    return (
        <div className="row">
            <div className="time container-sm d-flex justify-content-center col-12">
                <div className="logo"><i className="fa-regular fa-clock"></i></div>
                <div className="six">{counter.digitSix % 10}</div>
                <div className="five">{counter.digitFive % 10}</div>
                <div className="four">{counter.digitFour % 10}</div>
                <div className="three">{counter.digitThree % 10}</div>
                <div className="two">{counter.digitTwo % 10}</div>
                <div className="one">{counter.digitOne % 10}</div>
            </div>
        </div>
    );
}

SimpleCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number
};

export default SimpleCounter;