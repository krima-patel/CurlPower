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
      const payload = { ...formInput, uid: user.uid, date: new Date().toDateString() };
      createRoutine(payload).then(() => {
        router.push('/routines');
      });
    }
  };

  return (
    <Form style={{ color: '#DC6434' }} onSubmit={handleSubmit}>
      <h2 className="text mt-5" style={{ color: '#DC6434' }}>{obj.firebaseKey ? 'Update' : 'Share'} Routine</h2>
      <h6 style={{ color: '#344729' }}>Share your hair care routine here by filling out this form. This gives other users insight into your journey which may benefit them. Give a nice title, letting us know what this routine is specifically for. Identify your hair type, this helps tremendously! (if you are unsure, go to Hair Type Information) And please be thorough in your description! We want ALL the details.</h6>
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
          placeholder="Description of Your Routine"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <Button type="submit" className="routine-form-btn">{obj.firebaseKey ? 'Update' : 'Submit'} Routine</Button>
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
