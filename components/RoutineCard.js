import React from 'react';
import { PropTypes } from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { deleteSingleRoutine } from '../api/routineData';

export default function RoutineCard({ routineObj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisRoutine = () => {
    if (window.confirm(`Delete ${routineObj.title}?`)) {
      deleteSingleRoutine(routineObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title><b>Routine</b>: {routineObj.title}</Card.Title>
          <Card.Subtitle><b>Hair Type</b>: {routineObj.hairType}</Card.Subtitle>
          <Card.Text><b>Description</b>: {routineObj.description}</Card.Text>
          <Card.Subtitle>
            <b>Post Created</b>: {new Date().toLocaleString()}
            {routineObj.date}
          </Card.Subtitle>
          <h5>{user.displayName}</h5>
          <h5>{user.photoUrl}</h5>
          {routineObj.uid === user.uid ? (
            <>
              <Link href={`/routine/${routineObj.firebaseKey}`} passHref>
                <Button variant="primary" className="m-2">
                  More Info
                </Button>
              </Link>
              <Link href={`/routine/edit/${routineObj.firebaseKey}`} passHref>
                <Button variant="info">Update Routine</Button>
              </Link>
              <Button variant="danger" onClick={deleteThisRoutine} className="m-2">
                Delete Routine
              </Button>
            </>
          ) : (
            <Link href={`/routine/${routineObj.firebaseKey}`} passHref>
              <Button variant="primary" className="m-2">
                More Info
              </Button>
            </Link>
          )}
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
    uid: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoUrl: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
