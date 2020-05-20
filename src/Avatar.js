import React from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

//Functional Component
const Avatar = (props) =>{
    return (
            <div>
                <h1>Welcome to Avatar World</h1>
                <AvatarList id="1" name="Pawan" work="Web Developer"/>
                <AvatarList id="2" name="Rahul" work="Web Devloper"/>
                <AvatarList id="3" name="Punit" work="Web Devloper"/>
                <AvatarList id="4" name="Jeetu" work="Web Devloper"/>
                <button>Subscribe</button>
            </div>
           )
}

export default Avatar;