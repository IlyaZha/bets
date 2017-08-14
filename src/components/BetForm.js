import React, { PropTypes, Component } from 'react'
import store from 'react'

export default class BetForm extends Component {
    render() {
        {console.log('Render BetForm')}
        {console.log(this.state.bet)}
        {console.log(store.getState().bet)}
        {console.log(store.getState())}
        const is_opened = this.state.is_opened ? 'is_opened' : 'closed'
        return <div className='float-left'>
            {
                this.state.is_opened ? <div className={is_opened}>
                    <form>
                        <div>Bet Description</div>
                        <label>Your bet: <input type='number' className='number-value' /></label>
                        <div>&nbsp;</div>
                        <input type='button' value={'Place a Bet'} />
                    </form>
                </div> : ''
            }
        </div>
    }

    constructor(props) {
        super(props);
        this.state = {
            // is_opened: false
            is_opened: true
        };
    }
}

BetForm.propTypes = {
    is_opened: PropTypes.bool
}
