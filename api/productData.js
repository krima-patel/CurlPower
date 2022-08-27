import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getAllProducts = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/products.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const deleteProduct = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/products/${firebaseKey}.json`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});

const getSingleProduct = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/products/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createProduct = (productObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/products.json`, productObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/products/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

const updateProduct = (productObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/products/${productObj.firebasesKey}.json`, productObj)
    .then(resolve)
    .catch(reject);
});

export {
  getAllProducts,
  deleteProduct,
  getSingleProduct,
  createProduct,
  updateProduct,
};
