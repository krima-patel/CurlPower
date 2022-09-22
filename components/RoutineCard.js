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
    getUser(routineObj.uid).then(setUserDetails);
  }, [routineObj]);

  const deleteThisRoutine = () => {
    if (window.confirm(`Delete ${routineObj.title}?`)) {
      deleteSingleRoutine(routineObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card className="routine-cards" style={{ width: '18rem', margin: '15px' }}>
        <Card.Body style={{ textAlign: 'left' }}>
          <Card.Subtitle className="routine-hairType">
            <b>Hair Type {routineObj.hairType}</b>
          </Card.Subtitle>
          <Card.Title className="routine-title">
            <b>{routineObj.title}</b>
          </Card.Title>
          <Card.Subtitle className="routine-date">Posted: {routineObj.date}</Card.Subtitle>
          <h5 style={{ color: '#DC6434' }}>{userDetails.userName}</h5>
          <img className="user-image" src={userDetails.userImage} alt={userDetails.userName} />
          {user.uid === routineObj.uid ? (
            <>
              <Link href={`/routine/${routineObj.firebaseKey}`} passHref>
                <Button className="routine-btns">Learn More</Button>
              </Link>
              <Link href={`/routine/edit/${routineObj.firebaseKey}`} passHref>
                <Button className="routine-btns">Update</Button>
              </Link>
              <Button onClick={deleteThisRoutine} className="routine-btns" id="delete-btn">
                Delete
              </Button>
            </>
          ) : (
            <Link href={`/routine/${routineObj.firebaseKey}`} passHref>
              <Button className="routine-btns">Learn More</Button>
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
  onUpdate: PropTypes.func.isRequired,
};
