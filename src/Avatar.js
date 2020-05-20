import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

//Class Component
class Avatar extends Component{

    constructor(){
        super();
        this.state = {
            name:"Welcome to Avatar World"
        }
    }

    namechange(){
        this.setState({
            name:"Subscribed clicked"
        })
    }

    render(){
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

        //use map to loop
        const avatarcard = avatarlistarray.map((avatarcard, i) => {
            return <AvatarList key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
        })

        return (
            <div className="mainpage">
                <h1>{this.state.name}</h1>
                {avatarcard}
                <button onClick={() => this.namechange()}>Subscribe</button>
            </div>
           )

    }
    
}



    

    


export default Avatar;