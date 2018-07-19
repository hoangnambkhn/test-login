import React, { Component } from 'react';
import './style.css'

class header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSignup : false,
            persionLogin :  ''
        };
        console.log(props)
        
        this.clickSignup = this.clickSignup.bind(this);
    }
    clickSignup(){
        alert('you just click signup');
        this.setState({isSignup : true})
        this.props.showPopupSignin(true);
    }

    render() {
        return (
            <div>
                <nav className ="navbar navbar-default">
                <div className = "navbar-header">
                <ul className = "navbar-nav nav">
                
                    {this.state.isSignup ? 
                        <p>Hello : {this.state.persionLogin}</p>
                    :
                    
                        <button onClick = {this.clickSignup}>Signin</button>
                     
                     
                    }
                </ul>
                
                </div>
            </nav>
            </div>
        );
    }
}

export default header;