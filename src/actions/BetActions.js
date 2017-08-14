import {
    SET_BET
} from '../constants/Bet'

 export function setBet(bet) {

  return (dispatch) => {
    dispatch({
      type: SET_BET,
      payload: bet
    })
  }

}
