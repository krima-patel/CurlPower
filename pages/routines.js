import { useState, useEffect } from 'react';
import { getRoutines } from '../api/routineData';
import { useAuth } from '../utils/context/authContext';
import RoutineCard from '../components/RoutineCard';

export default function Routines() {
  const [routines, setRoutines] = useState([]);
  const { user } = useAuth();
  const getAllRoutines = () => {
    getRoutines(user).then(setRoutines);
  };
  useEffect(() => {
    getAllRoutines();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="d-flex flex-wrap">
      {routines.map((routine) => (
        <RoutineCard key={routine.firebaseKey} routineObj={routine} onUpdate={getAllRoutines} />
      ))}
    </div>
  );
}
