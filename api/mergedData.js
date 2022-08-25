import { getRoutineProducts, getSingleRoutine } from './routineData';

const viewRoutineDetails = (routineFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleRoutine(routineFirebaseKey), getRoutineProducts(routineFirebaseKey)])
    .then(([routineObject, routineProductsArray]) => {
      resolve({ ...routineObject, products: routineProductsArray });
    }).catch((error) => reject(error));
});

export default viewRoutineDetails;
