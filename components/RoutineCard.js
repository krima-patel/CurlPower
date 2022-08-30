/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { getUser } from '../api/userData';
import { deleteSingleRoutine } from '../api/routineData';
import { useAuth } from '../utils/context/authContext';

export default function RoutineCard({ routineObj, onUpdate }) {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUser(user.uid).then(setUserDetails);
  }, [user]);
  console.warn(userDetails);

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
          <h5>{userDetails.userName}</h5>
          <img src={userDetails.userImage} alt={userDetails.userName} />
          {routineObj.uid === userDetails.uid ? (
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
    photoURL: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
