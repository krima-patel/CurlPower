import { deleteProduct, getSingleProduct } from './productData';
import { deleteSingleRoutine, getRoutineProducts, getSingleRoutine } from './routineData';

const viewRoutineDetails = (routineFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleRoutine(routineFirebaseKey), getRoutineProducts(routineFirebaseKey)])
    .then(([routineObject, routineProductsArray]) => {
      resolve({ ...routineObject, products: routineProductsArray });
    }).catch((error) => reject(error));
});

const viewProductDetails = (productFirebaseKey) => new Promise((resolve, reject) => {
  getSingleProduct(productFirebaseKey)
    .then((productObject) => {
      getSingleProduct(productObject.routine_id)
        .then((routineObject) => {
          resolve({ routineObject, ...productObject });
        });
    }).catch((error) => reject(error));
});

const deleteRoutineProducts = (routineId) => new Promise((resolve, reject) => {
  getRoutineProducts(routineId).then((productsArray) => {
    const deleteProductPromises = productsArray.map((product) => deleteProduct(product.firebaseKey));

    Promise.all(deleteProductPromises).then(() => {
      deleteSingleRoutine(routineId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export {
  viewRoutineDetails,
  viewProductDetails,
  deleteRoutineProducts,
};
