import {
    SELECTED_BET
} from '../constants/BetForm'

 export function setSelectedBet() {

  return (dispatch) => {
    dispatch({
      type: SELECTED_BET,
      payload: {}//TODO
    })
  }

}
