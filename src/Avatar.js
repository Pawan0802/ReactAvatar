import React from 'react';
import './Avatar.css';
import 'tachyons';

//Functional Component
const Avatar = (props) =>{
    return (<div className="avatarstyle ma4 bg-light-purple dib pa4">
                <img src="https://joeschmoe.io/api/v1/pawan" alt="avatar"/>
                <h1> {props.name} </h1>
                <p>  {props.work}</p>
            </div>
           )
}

export default Avatar;