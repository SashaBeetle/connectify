import React, { useState } from "react";
import MicButtonImg from "../../../assets/icons/microphone.svg";
import MicButtonImgOff from "../../../assets/icons/microphone-off.svg";

const MicButton = () => {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const handleMicButtonPressed = () => {
    setIsMicMuted(!isMicMuted);
  };

  return (
    <div className="video_button_container">
      <img
        src={isMicMuted ? MicButtonImgOff : MicButtonImg}
        onClick={handleMicButtonPressed}
        alt="safd"
        className="video_button_image"
      />
    </div>
  );
};

export default MicButton;
