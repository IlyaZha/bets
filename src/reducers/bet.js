import {
    SET_BET
} from '../constants/Bet'

const initialState = {
    bet: null
}

export default function setBet(state = initialState, action) {

  switch (action.type) {
    case SET_BET: {
        return {...state, bet: action.payload}
    }

    default:
      return state;
  }

}
