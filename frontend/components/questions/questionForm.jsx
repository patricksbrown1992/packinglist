import React from 'react';
import { Link } from 'react-router-dom';


class QuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { business: false, 'swim': false };
        this.handleChangeBusiness = this.handleChangeBusiness.bind(this);
        this.handleChangeSwim = this.handleChangeSwim.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeBusiness(e) {
        // e.preventDefault()
        e.preventDefault()
        
        return this.setState({ business: e.target.checked});
    
    }
    handleChangeSwim(e) {
        e.preventDefault()
        return this.setState({ swim: e.target.checked });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();

    }



    render() {
        // debugger
        return (

            <div className="question-form">
                {/* <button onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button> */}
                {/* <button onClick={this.handleChangeBusiness()}>Business?</button> */}
      
                <input onChange={this.handleChangeBusiness} id='2' type="checkbox" checked={this.state.business} />
                <label htmlFor='2'>Business?</label>
                        
                <input onChange={this.handleChangeSwim} id='1' type="checkbox" checked={this.state.swim} />
                <label htmlFor='1' >Swim?</label>
                        
                        
                        
                        
            </div>
        )
    }
         
};

export default QuestionForm;