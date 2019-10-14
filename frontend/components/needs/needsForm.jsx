import React from 'react';
import { Link } from 'react-router-dom';


class NeedsForm extends React.Component {
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }
    handleClick(e){
        if (e.target.classList[0] == 'uncrossed'){
            debugger
            e.target.classList.remove('uncrossed');
            e.target.classList.add('crossed');
        } else {
            debugger
            e.target.classList.remove('crossed');
            e.target.classList.add('uncrossed');
        }
    }


    
    render() {
        debugger
        let num_underwear = this.props.needs[0] * 2;
        
        return (
            <div className="needs-form">
            <h1>Here is what you need:</h1>
                <button onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                <div className = 'two-lists'>
                    <div className='needs-outline'>

                        <ul>
                            <h1>Carry on</h1>
                            <li onClick={this.handleClick} className = "uncrossed">Headphones</li>
                            <li onClick={this.handleClick} className="uncrossed">Pillow</li>
                            <li onClick={this.handleClick} className="uncrossed">Glasses/Contacts</li>
                            <li onClick={this.handleClick} className="uncrossed">Phone</li>
                            <li onClick={this.handleClick} className="uncrossed">Charger</li>
                            <li onClick={this.handleClick} className="uncrossed">ID</li>
                            

                        </ul>
                    </div>
                    <div className='needs-outline'>

                        <ul>
                            <h1>Packed Bag</h1>
                            <li onClick={this.handleClick} className="uncrossed">Meds</li>
                            <li onClick={this.handleClick} className="uncrossed">Toiletries</li>
                            <li onClick={this.handleClick} className="uncrossed">Camera</li>
                            <li onClick={this.handleClick} className="uncrossed">Day Bag</li>
                            <li onClick={this.handleClick} className="uncrossed">Scandals</li>
                            <li onClick={this.handleClick} className="uncrossed">{num_underwear} pairs of underwear</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        )
    }

};

export default NeedsForm;