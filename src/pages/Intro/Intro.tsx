import { useEffect, useRef, useState } from "react";
import { Wrapper, Video, Button } from "./Intro.style";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showButton, setShowButton] = useState(false);

  const navigate = useNavigate();
  const handleIntroClick = () => {
    navigate("/home");
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.9;
    }
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <Video
        src="/culinaryclasswar.mp4"
        ref={videoRef}
        autoPlay={true}
        muted={true}
      />
      {showButton && (
        <Button onClick={handleIntroClick}>쉐프 식당 보러가기</Button>
      )}
    </Wrapper>
  );
};

export default Intro;
