import axios from 'axios';
import * as act from './actions';

export function getSmurfs() {
  return (dispatch) => {
    dispatch({ type: act.FETCH_SMURFS_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        dispatch({ type: act.FETCH_SMURFS_FINISH });
        dispatch({ type: act.FETCH_SMURFS_RECEIVED, payload: response });
      })
      .catch((error) => {
        dispatch({ type: act.FETCH_SMURFS_FINISH });
      });
  };
}

export function postSmurf(data) {
  return (dispatch) => {
    dispatch({ type: act.FETCH_SMURFS_START });
    axios
      .post('http://localhost:3333/smurfs', data)
      .then((response) => {
        dispatch({
          type: act.FETCH_SMURFS_RECEIVED,
          payload: response,
        });
        dispatch({ type: act.FETCH_SMURFS_FINISH });
      })
      .catch((error) => {
        dispatch({ type: act.FETCH_SMURFS_FINISH });
      });
  };
}

function deleteSmurf() {
  return (dispatch) => {
    dispatch({ type: act.FETCH_SMURFS_START });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((response) => {
        dispatch({ type: act.FETCH_SMURFS_RECEIVED, payload: response });
        dispatch({ type: act.FETCH_SMURFS_FINISH });
      })
      .catch((error) => {
        dispatch({ type: act.FETCH_SMURFS_FINISH });
      });
  };
}
