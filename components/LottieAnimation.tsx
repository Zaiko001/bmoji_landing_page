import React from 'react';
import Lottie from 'react-lottie';

interface LottieAnimationProps {
  animationData: object;
  height?: number;
  width?: number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  height = 500,
  width = 500,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    },
  };

  return (
    <div style={{ pointerEvents: 'none' }}>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default LottieAnimation;
