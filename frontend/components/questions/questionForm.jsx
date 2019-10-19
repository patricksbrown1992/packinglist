import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class QuestionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            business: false, 
            swim: false, 
            cold: false, 
            hot: false, 
            international: false, 
            num_days: null,
        };
        this.handleChangeBusiness = this.handleChangeBusiness.bind(this);
        this.handleChangeSwim = this.handleChangeSwim.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeDays = this.handleChangeDays.bind(this);
        this.handleChangeInternational = this.handleChangeInternational.bind(this);
        this.handleChangeCold = this.handleChangeCold.bind(this);
        this.handleChangeHot = this.handleChangeHot.bind(this);
    }

    handleChangeBusiness(e) {
        let cold = this.state.cold;
        let hot = this.state.hot;
        let business = !this.state.business;
        let international = this.state.international;
        let swim = this.state.swim;
        let id = this.props.user.id;
        let user = { swim, international, business, hot, cold, id };
        if (e.target.classList[0] == 'green') {
            e.target.classList.remove('green');
            e.target.classList.add('red');
            
            this.setState({ business: !this.state.business }, () => this.props.updateBusiness(user));
        } else {
            e.target.classList.remove('red');
            e.target.classList.add('green');
            this.setState({ business: !this.state.business }, () => this.props.updateBusiness(user));

        }
    }
    
    handleChangeSwim(e) {
        let cold = this.state.cold;
        let hot = this.state.hot;
        let business = this.state.business;
        let international = this.state.international;
        let swim = !this.state.swim;
        let id = this.props.user.id;
        let user = { swim, international, business, hot, cold, id };
        if (e.target.classList[0] == 'green') {
            e.target.classList.remove('green');
            e.target.classList.add('red');
            this.setState({ swim: !this.state.swim }, () => this.props.updateSwim(user));

        } else {
            e.target.classList.remove('red');
            e.target.classList.add('green');
            this.setState({ swim: !this.state.swim }, () => this.props.updateSwim(user));
        }
    }

    handleChangeInternational(e) {
        let cold = this.state.cold;
        let hot = this.state.hot;
        let business = this.state.business;
        let international = !this.state.international;
        let swim = this.state.swim;
        let id = this.props.user.id;
        let user = {swim, international, business, hot, cold, id};
        if (e.target.classList[0] == 'green') {
            e.target.classList.remove('green');
            e.target.classList.add('red');
            this.setState({ international: !this.state.international }, () => this.props.updateInternational(user));

        } else {
            e.target.classList.remove('red');
            e.target.classList.add('green');
            this.setState({ international: !this.state.international }, () => this.props.updateInternational(user));
        }
    }

    handleChangeCold(e) {
        let cold = !this.state.cold;
        let hot = this.state.hot;
        let business = this.state.business;
        let international = this.state.international;
        let swim = this.state.swim;
        let id = this.props.user.id;
        let user = { swim, international, business, hot, cold, id };
        if (e.target.classList[0] == 'green'){
            e.target.classList.remove('green');
            e.target.classList.add('red');
            this.setState({ cold: !this.state.cold }, () => this.props.updateCold(user));
        } else {
            e.target.classList.remove('red');
            e.target.classList.add('green');
            this.setState({ cold: !this.state.cold }, () => this.props.updateCold(user));
        }
        
    }

    handleChangeHot(e) {
        let cold = this.state.cold;
        let hot = !this.state.hot;
        let business = this.state.business;
        let international = this.state.international;
        let swim = this.state.swim;
        let id = this.props.user.id;
        let user = { swim, international, business, hot, cold, id };
        if (e.target.classList[0] == 'green') {
            e.target.classList.remove('green');
            e.target.classList.add('red');
            this.setState({ hot: !this.state.hot }, () => this.props.updateHot(user));
        } else {
            e.target.classList.remove('red');
            e.target.classList.add('green');
            this.setState({ hot: !this.state.hot }, () => this.props.updateHot(user));
        }

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleChangeDays(){
        let cold = this.state.cold;
        let hot = this.state.hot;
        let business = this.state.business;
        let international = this.state.international;
        let swim = this.state.swim;
        let id = this.props.user.id;

        return (e) => {
            this.setState({ num_days: parseInt(e.target.value) }, () => this.props.updateDay({ swim, international, business, hot, cold, id, days: this.state.num_days}));
        };
    }
   



    render() {

        if( Number.isInteger(this.state.num_days) ){
            return (
    
                <div className="question-form">
                    <div className='logout-button-div'>
                        <button className='logout-button' onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                    </div>
                    <div className="question-form-panel">
                        <div className='question-input-div'>
                            <h1>Number of Days</h1>
                            <input type="text" onChange={this.handleChangeDays()} placeholder='number of days' />
                        </div>
                        <div className='question-button-div'> 
                            <button className='red' onClick={this.handleChangeSwim}>Swim?</button>
                            <button className='red' onClick={this.handleChangeBusiness}>Business?</button>
                            <button className='red' onClick={this.handleChangeInternational}>International?</button>
                            <button className='red' onClick={this.handleChangeCold}>Cold?</button>
                            <button className='red' onClick={this.handleChangeHot}>Hot?</button>
                        </div>
                        <div className='question-link-div'>
                            <Link to='/needs'>Submit</Link>

                        </div>
                    </div>
    
                            
                            
                </div>
            )

        } else {
            return (

                <div className="question-form">
                    <div className='logout-button-div'>
                        <button className='logout-button' onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                    </div>                    
                    <div className="question-form-panel">
                        <div className='question-input-div'>
                            <h1>Number of Days</h1>
                            <input type="text" onChange={this.handleChangeDays()} placeholder='number of days' />
                            <h3>Must enter number to continue</h3>
                        </div>
                        <div className='question-button-div'>
                            <button className='red' onClick={this.handleChangeSwim}>Swim?</button>
                            <button className='red' onClick={this.handleChangeBusiness}>Business?</button>
                            <button className='red' onClick={this.handleChangeInternational}>International?</button>
                            <button className='red' onClick={this.handleChangeCold}>Cold?</button>
                            <button className='red' onClick={this.handleChangeHot}>Hot?</button>
                        </div>
                        <div className='question-link-div'>
                        

                        </div>
                        
                    </div>



                </div>
            )
        }
    }
         
};

export default QuestionForm;