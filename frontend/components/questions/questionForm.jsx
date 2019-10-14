import React from 'react';
import { Link } from 'react-router-dom';


class QuestionForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = { email: '', password: '' };
        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(field) {

    //     return (e) => {
    //         this.setState({ [field]: e.target.value });
    //     };
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();

    }



    render() {
        return (

            <div className="logout">
                {/* <i onClick={this.props.closeModal} className="fas fa-times fa-2x"></i> */}
                <br />
                <br />


                <button onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>


            </div>
        )
    }
         
};

export default QuestionForm;