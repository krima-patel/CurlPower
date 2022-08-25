import React from 'react';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
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
          <Card.Title>{routineObj.title}</Card.Title>
          <Card.Subtitle>{routineObj.hairType}</Card.Subtitle>
          <Card.Subtitle>{routineObj.date}</Card.Subtitle>
          <Card.Subtitle>{routineObj.uid}</Card.Subtitle>
          <Card.Text>{routineObj.description}</Card.Text>
          <Link href={`/routine/${routineObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">View</Button>
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
    uid: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
