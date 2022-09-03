import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Image } from 'react-bootstrap';
import { viewProductDetails } from '../../api/mergedData';

export default function ViewProduct() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewProductDetails(firebaseKey).then(setProductDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <Image src={productDetails.image} alt={productDetails.name} style={{ width: '300px', margin: '20px 0' }} />
      </div>
      <div style={{ margin: '20px' }}>
        <h4 style={{ color: '#DC6434' }}>
          {productDetails.name}
        </h4>
        <h4 style={{ color: '#78816E' }}>
          Product Type: {productDetails.type}
        </h4>
        <h5>What it does: {productDetails.purpose || ''}</h5>
        <h4 style={{ color: '#78816E' }}>
          Price Range: {productDetails.priceRange}
        </h4>
      </div>
    </div>
  );
}
