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

let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(six, five, four, three, two, one)
    
    counter ++;
    /* ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />,
        document.querySelector('#time')
    ); */

},1000)


SimpleCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
    digitFive: PropTypes.number,
    digitSix: PropTypes.number
};

export default SimpleCounter;