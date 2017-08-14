import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'
import * as betActions from '../actions/BetActions'
import BetForm from '../components/BetForm';

class App extends Component {
  render() {
    const { user, page } = this.props
    const { getBets } = this.props.pageActions
    const { betActions } = this.props

    return <div className='row'>
      <Page events={page.events} sport={page.sport} getBets={getBets} fetching={page.fetching} betActions={betActions} />
        <div className='float-left right-block'>
          <User name={user.name} />
            <div>&nbsp;</div>
          <BetForm />
        </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page,
    bet: state.bet
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    betActions: bindActionCreators(betActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)