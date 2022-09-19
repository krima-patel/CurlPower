import React, { useState, useEffect } from 'react';
import { getRoutines } from '../api/routineData';
import RoutineCard from '../components/RoutineCard';

export default function Routines() {
  const [routines, setRoutines] = useState([]);
  const getAllRoutines = () => {
    getRoutines().then(setRoutines);
  };

  useEffect(() => {
    getAllRoutines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <>
        <h1 className="collection">Routine Collection</h1>
        <h5 className="collection">Browse the Routine Collection to find a routine that suits your hair type. Here, you will learn methods that have worked for certain curls along with the products associated with the routine.</h5>
      </>
      <div className="d-flex flex-wrap">
        {routines.map((routine) => (
          <RoutineCard key={routine.firebaseKey} routineObj={routine} onUpdate={getAllRoutines} />
        ))}
      </div>
    </>
  );
}
