/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteProduct } from '../api/productData';
import { getUser } from '../api/userData';
import { useAuth } from '../utils/context/authContext';

export default function ProductCard({ productObj, onUpdate }) {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUser(productObj.uid).then(setUserDetails);
  }, [productObj]);

  const deleteThisProduct = () => {
    if (window.confirm(`Delete ${productObj.name}?`)) {
      deleteProduct(productObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productObj.image} alt={productObj.type} style={{ height: '400px' }} className="card-img-top" />
      <Card.Body>
        <Card.Title>{productObj.name}</Card.Title>
        <Card.Text>{productObj.purpose}</Card.Text>
        <Card.Subtitle>{productObj.date}</Card.Subtitle>
        <h5>{userDetails.userName}</h5>
        <img src={userDetails.userImage} alt={userDetails.userName} />
        {productObj.uid === user.uid ? (
          <>
            <Link href={`/product/${productObj.firebaseKey}`} passHref>
              <Button variant="primary" className="m-2">
                More Info
              </Button>
            </Link>
            <Link href={`/product/edit/${productObj.firebaseKey}`} passHref>
              <Button variant="info">Update Product</Button>
            </Link>
            <Button variant="danger" onClick={deleteThisProduct} className="m-2">
              Delete Product
            </Button>
          </>
        ) : (
          <Link href={`/product/${productObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">
              More Info
            </Button>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    image: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    purpose: PropTypes.string,
    date: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
