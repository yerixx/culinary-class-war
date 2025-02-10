import { useEffect, useRef } from "react";
import { Wrapper, Video } from "./Intropage.style";

const Intro = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
    return;
  }, []);

  return (
    <Wrapper>
      <Video
        src="/culinaryclasswar.mp4"
        ref={videoRef}
        autoPlay={true}
        muted={true}
        style={{ pointerEvents: "none" }}
      />
    </Wrapper>
  );
};

export default Intro;
