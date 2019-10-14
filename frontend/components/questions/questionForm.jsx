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
        if (e.target.classList[0] == 'green') {
            e.target.classList.remove('green');
            e.target.classList.add('red');
            this.setState({ business: !this.state.business }, () => this.props.receiveBusiness(this.state.business));
        } else {
            e.target.classList.remove('red');
            e.target.classList.add('green');
            this.setState({ business: !this.state.business }, () => this.props.receiveBusiness(this.state.business));

        }
    }
    
    handleChangeSwim(e) {
        if (e.target.classList[0] == 'green') {
            e.target.classList.remove('green');
            e.target.classList.add('red');
            this.setState({ swim: !this.state.swim }, () => this.props.receiveSwim(this.state.swim));

        } else {
            e.target.classList.remove('red');
            e.target.classList.add('green');
            this.setState({ swim: !this.state.swim }, () => this.props.receiveSwim(this.state.swim));
        }
    }

    handleChangeInternational(e) {
        if (e.target.classList[0] == 'green') {
            e.target.classList.remove('green');
            e.target.classList.add('red');
            this.setState({ international: !this.state.international }, () => this.props.receiveInternational(this.state.international));

        } else {
            e.target.classList.remove('red');
            e.target.classList.add('green');
            this.setState({ international: !this.state.international }, () => this.props.receiveInternational(this.state.international));
        }
    }

    handleChangeCold(e) {
        if (e.target.classList[0] == 'green'){
            e.target.classList.remove('green');
            e.target.classList.add('red');
            this.setState({ cold: !this.state.cold }, () => this.props.receiveCold(this.state.cold));
        } else {
            e.target.classList.remove('red');
            e.target.classList.add('green');
            this.setState({ cold: !this.state.cold }, () => this.props.receiveCold(this.state.cold));
        }
        
    }

    handleChangeHot(e) {
        if (e.target.classList[0] == 'green') {
            e.target.classList.remove('green');
            e.target.classList.add('red');
            this.setState({ hot: !this.state.hot }, () => this.props.receiveHot(this.state.hot));
        } else {
            e.target.classList.remove('red');
            e.target.classList.add('green');
            this.setState({ hot: !this.state.hot }, () => this.props.receiveHot(this.state.hot));
        }

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

        return (

            <div className="question-form">

                <button onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                <input type="text" value={this.state.num_days} onChange={this.handleChangeDays()} placeholder='number of days'/>
                <button className='red' onClick={this.handleChangeSwim}>Swim?</button>
                <button className='red' onClick={this.handleChangeBusiness}>Business?</button>
                <button className='red' onClick={this.handleChangeInternational}>International?</button>
                <button className='red' onClick={this.handleChangeCold}>Cold?</button>
                <button className='red' onClick={this.handleChangeHot}>Hot?</button>

                <Link to='/needs'>Submit</Link>
                        
                        
            </div>
        )
    }
         
};

export default QuestionForm;