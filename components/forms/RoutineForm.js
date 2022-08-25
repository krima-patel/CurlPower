import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { createRoutine, updateRoutine } from '../../api/routineData';

const initialState = {
  title: '',
  hairType: '',
  date: '',
  uid: '',
  description: '',
};

function RoutineForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
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
      updateRoutine(formInput).then(() => router.push(`/routine/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createRoutine(payload).then(() => {
        router.push('/routines');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Routine</h2>
      <FloatingLabel controlId="floatingInput1" label="Your Routine Title" className="mb-3">
        <Form.Control type="text" placeholder="Your Routine Title" name="title" value={formInput.title} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Your Hair Type" className="mb-3">
        <Form.Control type="text" placeholder="Your Hair Type" name="hairType" value={formInput.hairType} onChange={handleChange} required />
      </FloatingLabel>
      {/* <FloatingLabel controlId="floatingInput3" label="Description of Your Routine" className="mb-3">
        <Form.Control type="text" placeholder="Description of your Routine" name="description" value={formInput.description} onChange={handleChange} required />
      </FloatingLabel> */}
      <FloatingLabel controlId="floatingTextarea2" label="Description of Your Routine">
        <Form.Control
          as="textarea"
          placeholder="Description of Your Routine (be thorough and detailed!)"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Routine</Button>
    </Form>
  );
}

RoutineForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    hairType: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

RoutineForm.defaultProps = {
  obj: initialState,
};

export default RoutineForm;
