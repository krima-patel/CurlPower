import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { viewRoutineDetails } from '../../api/mergedData';
import ProductCard from '../../components/ProductCard';

export default function ViewRoutine() {
  const [routineDetails, setRoutineDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  console.warn(firebaseKey);

  useEffect(() => {
    viewRoutineDetails(firebaseKey).then(setRoutineDetails);
  }, [firebaseKey]);

  return (
    <div>
      <h2 style={{ color: '#DC6434', margin: '20px' }}>{routineDetails.title}</h2>
      <h5 style={{ color: '#78816E', margin: '20px' }}>Hair Type {routineDetails.hairType}</h5>
      <h3 style={{ margin: '20px' }}>How it&#39;s done</h3>
      <p>
        {routineDetails.description}
      </p>
      <div className="container productsContainer">
        {routineDetails.products?.map((product) => (
          <ProductCard
            key={product.firebaseKey}
            productObj={product}
            onUpdate={() => {
              viewRoutineDetails(firebaseKey).then(setRoutineDetails);
            }}
          />
        ))}
      </div>
    </div>
  );
}
