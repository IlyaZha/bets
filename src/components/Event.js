import React, { PropTypes, Component } from 'react'
import Bet from './Bet';

export default class Event extends Component {
    onPlusClick() {
        const { is_opened } = this.state
        this.setState({is_opened: !is_opened})
    }

    render() {
        const is_opened = this.state.is_opened ? 'is_opened' : 'closed'
        const children = this.props.children
        let i;
        const { setBet } = this.props.betActions

        return children ? <div>
            <div className='float-left long'>{children[0][0].start_time.replace(/\d(T)\d/g, '')}</div>
            <div className='float-left long'>{children[0][0].name}</div>
            <a className={'float-left plus ' + is_opened} onClick={::this.onPlusClick}>+</a>
            <div className='clear'>&nbsp;</div>
            {
                this.state.is_opened ? <div>
                {
                    children.map((bet_group) => <div className='clear'>
                        <div className='float-left'>
                            <span className='float-left long'>{bet_group[i=0].market_type} {bet_group[0].type_parameter ? <span>({bet_group[0].type_parameter})</span> : ''}</span>
                            <span className='float-left'>
                            {
                                bet_group.map((bet) => <Bet market_type={bet_group[i=0].market_type} type_parameter={bet_group[0].type_parameter} i={i} type={bet.type} value={bet.value} setBet={setBet} />)
                            }
                            </span>
                        </div>
                    </div>)
                }
                    <div>&nbsp;</div>
                </div> : ''
            }

        </div> : ''
    }

    constructor(props) {
        super(props);
        this.state = {
            is_opened: false
        };
    }
}

Event.propTypes = {
    is_opened: PropTypes.bool,
    children: PropTypes.Array,
    betActions: PropTypes.object
}
