import React, { Component } from 'react';
import './Top.css';
import main_ci from './images/main-ci.png';
import user_pic from './images/user-no-pic.png';

class Top extends Component {
    render(){
        return(
            <div>
            <div className="Top">
                    <img id="main_img" draggable="false" src={main_ci} alt=''/>
                    <img id="user_img" src={user_pic} align="right" alt=''/>
            </div>
            <hr></hr>
            </div>
        );
    }
}

export default Top; 