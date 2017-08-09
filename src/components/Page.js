import React, {PropTypes, Component} from 'react'

export default class Page extends Component {
    onSportBtnClick(e) {
        this.props.getBets(e.target.innerText)
    }

    getOdds(bet_group) {
        let html = '';
        let i = 0;
        bet_group.map(function (bet) {
            if (i++ < 4) {
                html += '<td>' + bet.type + '</td><td>' + bet.value + '</td>';
            }
        });
        return {__html: html};
    }

    render() {
        const {sport, bets, fetching} = this.props
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
                    Object.keys(bets).length > 0
                        ?
                        <table>
                            <thead>
                            <tr>
                                <th className='long'>Date</th>
                                <th className='long'>Name</th>
                                <th>Type</th>
                                <th></th>
                                <th className='value'></th>
                                <th className='value'></th>
                                <th className='value'></th>
                                <th></th>
                                <th className='value'></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                bets.map((bet_group) =>
                                    <tr>
                                        <td>{bet_group[0].start_time.replace(/\d(T)\d/g, '')}</td>
                                        <td>{bet_group[0].name}</td>
                                        <td>{bet_group[0].market_type}</td>
                                        <div dangerouslySetInnerHTML={::this.getOdds(bet_group)}/>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                        : <p>There are no bets now</p>
                }


            </div>
            <div className='hidden'>{sport}{bets}{fetching}</div>
        </div>
    }
}

Page.propTypes = {
    sport: PropTypes.string.isRequired,
    bets: PropTypes.array.isRequired,
    getBets: PropTypes.func.isRequired
}
