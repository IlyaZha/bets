import {
  GET_BETS_REQUEST,
  GET_BETS_SUCCESS
} from '../constants/Page'

const initialState = {
  sport: '',
  bets: [],
  fetching: false
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case GET_BETS_REQUEST:
      return { ...state, sport: action.payload, fetching: true }

    case GET_BETS_SUCCESS:
      return { ...state, bets: action.payload, fetching: false }

    default:
      return state;
  }

}
