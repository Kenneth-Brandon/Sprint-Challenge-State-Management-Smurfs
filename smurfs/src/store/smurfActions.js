import axios from 'axios';
import * as act from './actions';

export function getSmurfs() {
  return (dispatch) => {
    dispatch({ type: act.FETCH_SMURFS_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        dispatch({ type: act.FETCH_SMURFS_FINISH });
        dispatch({
          type: act.FETCH_SMURFS_RECEIVED,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('Problem GET', error);
        dispatch({ type: act.FETCH_SMURFS_FINISH });
      });
  };
}

export function postSmurf(data) {
  console.log('post action data: ', data);

  return (dispatch) => {
    dispatch({ type: act.FETCH_SMURFS_START });
    axios
      .post('http://localhost:3333/smurfs', data)
      .then((response) => {
        dispatch({ type: act.FETCH_SMURFS_FINISH });
        dispatch({
          type: act.FETCH_SMURFS_RECEIVED,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('Problem POST', error);
        dispatch({ type: act.FETCH_SMURFS_FINISH });
      });
  };
}

export function deleteSmurf(id) {
  console.log('deleting...');

  return (dispatch) => {
    dispatch({ type: act.FETCH_SMURFS_START });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then((response) => {
        dispatch({ type: act.FETCH_SMURFS_FINISH });
        dispatch({
          type: act.FETCH_SMURFS_RECEIVED,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log('Problem Delete', error);
        dispatch({ type: act.FETCH_SMURFS_FINISH });
      });
  };
}
