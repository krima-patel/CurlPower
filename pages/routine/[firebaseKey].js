import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import viewRoutineDetails from '../../api/mergedData';

export default function ViewRoutine() {
  const [routineDetails, setRoutineDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewRoutineDetails(firebaseKey).then(setRoutineDetails);
  }, [firebaseKey]);

  return (
    <div>
      <p>
        {routineDetails.description}
      </p>
    </div>
  );
}
