import React from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

//Functional Component
const Avatar = (props) =>{

    //creating an array for avatar list
    const avatarlistarray = [
        {
            id:1,
            name:"Pawan",
            work:"Full Stack Developer"
        },
        {
            id:2,
            name:"Rahul",
            work:"FrontEnd Developer"
        },
        {
            id:3,
            name:"Punit",
            work:"Database"
        },
        {
            id:4,
            name:"Jeetu",
            work:"BackEnd Developer"
        }
    ]

    

    return (
            <div>
                <h1>Welcome to Avatar World</h1>
                <AvatarList id={avatarlistarray[0].id} name={avatarlistarray[0].name} work={avatarlistarray[0].work}/>
                <AvatarList id={avatarlistarray[1].id} name={avatarlistarray[1].name} work={avatarlistarray[1].work}/>
                <AvatarList id={avatarlistarray[2].id} name={avatarlistarray[2].name} work={avatarlistarray[2].work}/>
                <AvatarList id={avatarlistarray[3].id} name={avatarlistarray[3].name} work={avatarlistarray[3].work}/>
                <button>Subscribe</button>
            </div>
           )
}

export default Avatar;