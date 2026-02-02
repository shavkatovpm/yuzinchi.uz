import { useState, useEffect } from 'react';
import BlurText from './BlurText';

interface LoadingAnimationProps {
  onComplete?: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Faqat birinchi kirishda ko'rsatish
    const hasVisited = sessionStorage.getItem('yuzinchi_visited');

    if (hasVisited) {
      setIsVisible(false);
      setShouldRender(false);
      return;
    }
  }, []);

  const handleAnimationComplete = () => {
    // Animatsiya tugagandan so'ng 1.5 soniya kutish
    setTimeout(() => {
      setIsFadingOut(true);
      sessionStorage.setItem('yuzinchi_visited', 'true');

      // Fade out tugagandan keyin
      setTimeout(() => {
        setIsVisible(false);
        setShouldRender(false);
        onComplete?.();
      }, 500);
    }, 1500);
  };

  if (!shouldRender) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#262626',
        display: isVisible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: isFadingOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
        flexDirection: 'column',
        gap: '0.5rem'
      }}
    >
      <BlurText
        text="Yuzinchi bosqichga"
        delay={150}
        animateBy="words"
        direction="top"
        className="blur-text-line"
        stepDuration={0.4}
      />
      <BlurText
        text="chiqishga tayyormisiz?"
        delay={150}
        animateBy="words"
        direction="top"
        className="blur-text-line"
        stepDuration={0.4}
        onAnimationComplete={handleAnimationComplete}
      />
      <style>{`
        .blur-text-line {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(2rem, 8vw, 5rem);
          font-weight: 700;
          color: #628141;
          letter-spacing: -0.02em;
          margin: 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
