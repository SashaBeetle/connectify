import React, { useEffect } from 'react';
import logo from '../../assets/images/logo-bg.png';
import styles from './Introduction.module.css';
import { ConnectingButtons } from '../../components/ConnectingButtons/ConnectingButtons';
import { connect } from 'react-redux';
import { setIsRoomHost } from '../../store/actions';

export const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    // setIsRoomHostActios(false);
  }, []);

  return (
    <div className={styles.introductionPageContainer}>
      <div className={styles.introductionPagePanel}>
        <img className={styles.introductionPageImage} src={logo} alt='logo' draggable='false' />
        <ConnectingButtons />
      </div>
    </div>
  );
};


const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapActionsToProps)(IntroductionPage);
