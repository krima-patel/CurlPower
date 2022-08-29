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
        <Image src={productDetails.image} alt={productDetails.name} style={{ width: '300px' }} />
      </div>
      <div className="text-black ms-5 details">
        <h4>
          Product Name: {productDetails.name}
        </h4>
        <h4>
          Product Type: {productDetails.type}
        </h4>
        <h5>
          What is the purpose of this product? What is it helping to solve for you?
        </h5>
        <p>{productDetails.purpose || ''}</p>
        <hr />
        <p>
          {productDetails.priceRange}
        </p>
      </div>
    </div>
  );
}
