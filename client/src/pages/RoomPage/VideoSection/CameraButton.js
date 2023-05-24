import React, { useState } from "react";

import CameraButtonImg from "../../../assets/icons/camera.svg";
import CameraButtonImgOff from "../../../assets/icons/camera-off.svg";

const CameraButton = () => {
  const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);

  const handleCameraButtonPressed = () => {
    setIsLocalVideoDisabled(!isLocalVideoDisabled);
  };

  return (
    <div className="video_button_container">
      <img
        src={isLocalVideoDisabled ? CameraButtonImgOff : CameraButtonImg}
        className="video_button_image"
        alt="asfd"
        onClick={handleCameraButtonPressed}
      />
    </div>
  );
};

export default CameraButton;
