import React, { Component } from 'react';
import './css/Header.css';


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img alt="display" src={ require('./assets/imgs/dylan_huang.jpg') } />
                <div className="metadata">
                    <div className="name"> Dylan </div>
                    <div className="age"> Age: 20 </div>
                    <div className="gender"> Gender: male </div>
                    <div className="race"> Race: Asian </div>
                    <div className="location"> Location: 94306 </div>
                    <div className="past-offenses"> Past Offenses: None </div>
                    <div className="description"> Has been accused of being a UIUC student from California who is studying Computer Engineering and doing research in the Computer Science Department. </div>

                </div>
            </div>
        );
    } 
}

    export default Header;
