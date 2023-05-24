import React from 'react';
import { useNavigate } from 'react-router-dom';
import ConnectingButton from '../ConnectingButton/ConnectingButton';
import styles from './ConnectingButtons.module.css';

export const ConnectingButtons = () => {
  const navigate = useNavigate();

  const pushToJoinRoomPage = () => {
    navigate('/join');
  };

  const pushToCreateRoomPage = () => {
    navigate('/join?host=true');
  };

  return (
    <div className={styles.connectingButtonsContainer}>
      <ConnectingButton
        buttonText='Create room'
        createRoomButton={true}
        onClickHandler={pushToCreateRoomPage}
      />
      <ConnectingButton buttonText='Join a meeting' onClickHandler={pushToJoinRoomPage} />
    </div>
  );
};
