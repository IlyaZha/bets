import React, {PropTypes, Component} from 'react'
import Event from './Event';

export default class Page extends Component {
    onSportBtnClick(e) {
        this.props.getBets(e.target.innerText)
    }

    render() {
        const {sport, events, fetching, betActions} = this.props
        return <div>
            <div className='mainBlock left'>
                <a className='sport' onClick={::this.onSportBtnClick}>Soccer</a>
                <a className='sport' onClick={::this.onSportBtnClick}>Basketball</a>
                <a className='sport' onClick={::this.onSportBtnClick}>Baseball</a>
                <a className='sport' onClick={::this.onSportBtnClick}>Hockey</a>
                <a className='sport' onClick={::this.onSportBtnClick}>Volleyball</a>
            </div>
            <div className='mainBlock middle'>
                <h1>Bets</h1>
                {
                    Object.keys(events).length > 0
                        ? <div>
                        {
                            events.map((event) => <Event children={event} betActions={betActions} />)
                        }
                        </div>
                        : <p>There are no bets now</p>
                }


            </div>
            <div className='hidden'>{sport}{events}{fetching}</div>
        </div>
    }

}

Page.propTypes = {
    sport: PropTypes.string.isRequired,
    events: PropTypes.array.isRequired,
    getBets: PropTypes.func.isRequired,
    betActions: PropTypes.object
}
