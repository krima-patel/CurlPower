import { useState, useEffect } from 'react';
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
    <div className="d-flex flex-wrap">
      {routines.map((routine) => (
        <RoutineCard key={routine.firebaseKey} routineObj={routine} onUpdate={getAllRoutines} />
      ))}
    </div>
  );
}
