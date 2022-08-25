import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getRoutines = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/routines.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const deleteSingleRoutine = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/routines/${firebaseKey}.json`)
    .then(() => {
      getRoutines().then((routinesArray) => resolve(routinesArray)).catch((error) => reject(error));
    });
});

const createRoutine = (newRoutineArray) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/routines.json`, newRoutineArray)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/routines/${response.data.name}.json`, body)
        .then(() => {
          getRoutines(newRoutineArray.uid).then(resolve);
        });
    }).catch(reject);
});

const updateRoutine = (routineObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/routines/${routineObj.firebaseKey}.json`, routineObj)
    .then(() => getRoutines(routineObj.uid).then(resolve))
    .catch(reject);
});

const getSingleRoutine = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/routines/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getRoutineProducts = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/products.json?orderBy="routine_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getRoutines,
  deleteSingleRoutine,
  createRoutine,
  updateRoutine,
  getSingleRoutine,
  getRoutineProducts,
};
