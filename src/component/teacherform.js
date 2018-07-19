import React, { Component } from 'react';

class teacherform extends Component {
    constructor(props){
        super(props);
        this.state = {
            teststate :'',
        }
    }
    render() {
        return (
            <div>
                <p>Hello {this.props.name}</p>
                <p>Hello im teacher form</p>
            </div>
        );
    }
}

export default teacherform;