import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class QuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            business: false, 
            swim: false, 
            rainy: false, 
            cold: false, 
            hot: false, 
            snowy: false, 
            international: false, 
            new_money: false,
            num_days: null,
            camping: false
        };
        this.handleChangeBusiness = this.handleChangeBusiness.bind(this);
        this.handleChangeSwim = this.handleChangeSwim.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDays = this.handleChangeDays.bind(this);
    }

    handleChangeBusiness() {
        return () => {
            this.setState({ business: !this.state.business }, () => this.props.receiveBusiness(this.state.business));
        };
    }
    
    handleChangeSwim() {
        return () => {
            this.setState({ swim: !this.state.swim }, () => this.props.receiveSwim(this.state.swim));
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleChangeDays(){
        
        return (e) => {
            this.setState({ num_days: parseInt(e.target.value) },  () => this.props.receiveDay(this.state.num_days));
        };
    }
   



    render() {
        debugger
        return (

            <div className="question-form">
                <button onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                <input type="text" value={this.state.num_days} onChange={this.handleChangeDays()} placeholder='number of days'/>
                <button onClick={this.handleChangeSwim()}>Swim?</button>
                <button onClick={this.handleChangeBusiness()}>Business?</button>
                <Link to='/needs'>Submit</Link>
                        
                        
            </div>
        )
    }
         
};

export default QuestionForm;