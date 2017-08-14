import React, { PropTypes, Component } from 'react'
import * as BetActions from '../actions/BetActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Bet extends Component {
    onCoefficienClick() {
        this.props.setBet(this);
    }

    render() {
        let { i } = this.props
        const { market_type } = this.props
        const { type_parameter } = this.props
        const { type } = this.props
        const { value } = this.props
        console.log('Bet');
        console.log(this.props.setBet);

        return <div className='float-left tr'>
            <span className={'float-left th th-' + ++i}>{type}</span>
            <span className={'float-left number-value th-' + i}><a data-market-type={market_type} data-type-parameter={type_parameter} onClick={::this.onCoefficienClick}>{value}</a></span>
        </div>
    }

}


Bet.propTypes = {
    i: PropTypes.number,
    market_type: PropTypes.string,
    type_parameter: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    setBet: PropTypes.func
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(BetActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Bet)