// eslint-disable-next-line quotes
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProductForm from '../../../components/forms/ProductForm';
import { getSingleProduct } from '../../../api/productData';

export default function EditProduct() {
  const [editProductItem, setEditProductItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleProduct(firebaseKey).then(setEditProductItem);
  }, [firebaseKey]);

  return (<ProductForm obj={editProductItem} />);
}
