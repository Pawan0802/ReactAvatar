import React from 'react';
import './Avatar.css';
import 'tachyons';

//Functional Component
const Avatar = () =>{
    return (<div className="avatarstyle">
                <img src="https://joeschmoe.io/api/v1/pawan" alt="avatar"/>
                <h1> Pawan Lamba </h1>
                <p> Web Developer</p>
            </div>
           )
}

export default Avatar;