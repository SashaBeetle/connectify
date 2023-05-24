import classNames from 'classnames';
import React from 'react';
import styles from './ConnectingButton.module.css';

export default function ConnectingButton({ createRoomButton = false, buttonText, onClickHandler }) {
  const buttonClass = classNames({
    [styles.createRoomButton]: createRoomButton,
    [styles.joinRoomButton]: !createRoomButton,
  });

  return (
    <button className={buttonClass} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
}
