import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getSingleRoutine } from '../../../api/routineData';
import RoutineForm from '../../../components/forms/RoutineForm';

export default function EditRoutine() {
  const [editRoutine, setEditRoutine] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleRoutine(firebaseKey).then(setEditRoutine);
  }, [firebaseKey]);
  return (<RoutineForm obj={editRoutine} />);
}
