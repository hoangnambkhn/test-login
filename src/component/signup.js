import React, { Component } from 'react';

class signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : ''
        }
        this.updateName = this.updateName.bind(this);
        this.teacherNext = this.teacherNext.bind(this);
        this.studentNext = this.studentNext.bind(this);
    }
    updateName(event){
        this.setState({name : event.target.value});
    }
    teacherNext(event) {
        this.props.updateData(false,true,false,false,this.state.name)
    }
    studentNext(event) {
        this.props.updateData(false,false,true,false,this.state.name)
    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <form>
                <input type = "text" name = "title" value={this.state.name} onChange={this.updateName}/>
                </form>
                <button onClick = {this.teacherNext}>teacher next</button>
                <button onClick = {this.studentNext}>student next</button>
            </div>
        );
    }
}

export default signup;