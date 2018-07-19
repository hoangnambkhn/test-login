import React, { Component } from 'react';
import Header from '../header/header';
import Signin from '../component/signup';
import TeacherForm from '../component/teacherform';
import StudentForm from '../component/studentform';
import Term from '../component/term';


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSignup: false,
            isShowTeacher: false,
            isShowStudent: false,
            isShowTeam: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isTeacher: false,
            isStudent: false
        }
    }
    render() {
        return (
            <div>
                <Header showPopupSignin={(index) => this.setState({ isShowSignup: index })} />
                {this.state.isShowSignup ?
                    <Signin updateData={(index1, index2, index3, index4, index5) => this.setState({
                        isShowSignup: index1,
                        isShowStudent: index3,
                        isShowTeacher: index2,
                        isShowTeam: index4,
                        firstName: index5
                    })} />
                    : null
                }
                {this.state.isShowTeacher ?
                    <TeacherForm name={this.state.name} />
                    : null
                }
                {this.state.isShowStudent ?
                    <StudentForm />
                    : null
                }
                {this.state.isShowSignup ?
                    <Signin />
                    : null
                }
            </div>
        );
    }
}

export default login;