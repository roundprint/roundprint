import axios from 'axios';

import {
    GET_ZONES,
    GET_ERRORS
} from './types';

// Get current profile
// export const getZones = () => dispatch => {
//   axios
//     .get('/api/zones/all-zones')
//     .then(res =>
//       dispatch({
//         type: GET_ZONES,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ZONES,
//         payload: err.response.data
//       })
//     );
// };


// Delete account & profile
// export const deleteAccount = () => dispatch => {
//   if (window.confirm('Are you sure? This can NOT be undone!')) {
//     axios
//       .delete('/api/profile')
//       .then(res =>
//         dispatch({
//           type: SET_CURRENT_USER,
//           payload: {}
//         })
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   }
// };

