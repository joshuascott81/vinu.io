import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => dispatch => {
  axios
    .get('/api/current_user')
    .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
};

export const submitProfile = values => dispatch => {
  console.log('here!!');
  axios
    .post('/api/profile', values)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_USER, payload: res.data });
    })
    .catch(err => 'some sort of error with submitting a profile');
};
