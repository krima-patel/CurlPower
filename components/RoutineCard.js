import React from 'react';
import { PropTypes } from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteSingleRoutine } from '../api/routineData';

export default function RoutineCard({
  routineObj, onUpdate,
}) {
  const deleteThisRoutine = () => {
    if (window.confirm(`Delete ${routineObj.title}?`)) {
      deleteSingleRoutine(routineObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Routine: {routineObj.title}</Card.Title>
          <Card.Subtitle>Hair Type: {routineObj.hairType}</Card.Subtitle>
          <Card.Text>Description: {routineObj.description}</Card.Text>
          <Card.Subtitle>Post Created: {new Date().toLocaleString()}{routineObj.date}</Card.Subtitle>
          <Link href={`/routine/${routineObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">More Info</Button>
          </Link>
          <Link href={`/routine/edit/${routineObj.firebaseKey}`} passHref>
            <Button variant="info">Update Routine</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisRoutine} className="m-2">Delete Routine</Button>
        </Card.Body>
      </Card>
    </>
  );
}

RoutineCard.propTypes = {
  routineObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    title: PropTypes.string,
    hairType: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
