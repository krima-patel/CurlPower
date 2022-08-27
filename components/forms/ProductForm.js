import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getRoutines } from '../../api/routineData';
import { createProduct, updateProduct } from '../../api/productData';

const initialState = {
  name: '',
  type: '',
  purpose: '',
  priceRange: '$',
  image: '',
  date: '',
};

export default function ProductForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [routines, setRoutines] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getRoutines(user.uid).then(setRoutines);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateProduct(formInput).then(() => router.push(`/product/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createProduct(payload).then(() => {
        router.push('/products');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Submit'} Product</h2>
      <FloatingLabel controlId="floatingInput1" label="Product Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter Product Name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Product Type" className="mb-3">
        <Form.Control type="text" placeholder="Enter Product Type" name="type" value={formInput.type} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Product Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter the Product Image URL" name="image" value={formInput.image} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Product Purpose" className="mb-3">
        <Form.Control type="text" placeholder="Enter your hair concern or purpose of this product" name="purpose" value={formInput.purpose} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Routine">
        <Form.Select aria-label="Routine" name="routine_id" onChange={handleChange} className="mb-3" required>
          <option value="">Select Routine</option>
          {routines.map((routine) => (
            <option
              key={routine.firebaseKey}
              value={routine.firebaseKey}
              // instead of selected, can also add defaultValue
              selected={obj.routine_id === routine.firebaseKey}
            >
              {routine.title}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Select Product Price Range">
        <Form.Select aria-label="Product Price Range" type="text" name="priceRange" value={formInput.priceRange} onChange={handleChange} className="mb-3" required>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </Form.Select>
      </FloatingLabel>
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Submit'} Product</Button>
    </Form>
  );
}

ProductForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    purpose: PropTypes.string,
    routine_id: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

ProductForm.defaultProps = {
  obj: initialState,
};
