import {
    GET_BETS_REQUEST,
    GET_BETS_SUCCESS,
    SET_SPORT
} from '../constants/Page'

export function getBets(sport) {


  return (dispatch) => {
    dispatch({
      type: GET_BETS_REQUEST,
      payload: sport
    })

    fetch('http://server.js/?action=getBets&sport=' + sport)
      .then(
          function(response) {
              if (response.status !== 200) {
                  console.log('Looks like there was a problem. Status Code: ' +
                      response.status);
                  dispatch({
                      type: GET_BETS_SUCCESS,
                      payload: []
                  })
                  return;
              }

              response.json().then(function(data) {
                  let arr = convertObjectRecursively(data);
                  console.log('result:');
                  console.log(arr);
                  dispatch({
                      type: GET_BETS_SUCCESS,
                      payload: arr
                  })
              });
          }
      )
    }



    function convertObjectRecursively(data) {
        if (!data) {
          return data;
        }
        if (typeof data === 'object' && data instanceof Array === false) {
            return convertObjectToArray(data);
        } else {
            if (data instanceof Array) {
                let arr = [];
                data.map(function(item) {
                    arr.push(convertObjectRecursively(item));
                });
                return arr;
            } else {
                return data;
            }
        }
    }

    function convertObjectToArray (object) {
        if (typeof object === 'object' && object instanceof Array === false) {
            let item = [];
            Object.keys(object).map(function(objectKey) {
                let value = object[objectKey];
                let result = convertObjectRecursively(value);
                item[objectKey] = result;
                item.push(result);
            });
            return item;
        } else {
            return object;
        }
    }
}

export function setSport(sport) {
    return {
        type: SET_SPORT,
        payload: sport
    }
}