export const getMoveSlideState = ({
  currentIndex,
  deltaY,
  maxScrollLeft,
  setCurrentIndex,
  isScroll,
}) => {
  const setLeft = () => {
    if (currentIndex + deltaY <= 0) {
      setCurrentIndex(0);
      return 0;
    } else if (currentIndex + deltaY >= maxScrollLeft) {
      setCurrentIndex(maxScrollLeft);
      return maxScrollLeft;
    }
    setCurrentIndex(currentIndex + deltaY);
    return currentIndex + deltaY;
  };

  return {
    top: 0,
    left: setLeft(),
    behavior: isScroll ? "smooth" : undefined,
  };
};
