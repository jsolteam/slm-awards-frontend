import { useCallback, useEffect, useRef, useState } from "react";
import * as Styles from "./Sidebar.styles";
import { getMoveSlideState } from "./SidebarHandle.helpers";

export const SidebarHandle = ({ children }) => {
  const ref = useRef(null);
  const isTouching = useRef(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [maxScrollLeft, setMaxScrollLeft] = useState(0);

  const moveSlide = useCallback(
    (deltaY, isScroll = false) => {
      // if (currentIndex + deltaY < maxScrollLeft && currentIndex + deltaY > 0) {
      //   setCurrentIndex((state) => state + deltaY);
      //   ref.current.scrollTo({
      //     top: 0,
      //     left: currentIndex + deltaY,
      //     behavior: isScroll ? "smooth" : undefined,
      //   });
      // } else if (currentIndex + deltaY <= 0) {
      //   ref.current.scrollTo({
      //     top: 0,
      //     left: 0,
      //     behavior: isScroll ? "smooth" : undefined,
      //   });
      // } else if (currentIndex + deltaY >= maxScrollLeft) {
      //   ref.current.scrollTo({
      //     top: 0,
      //     left: maxScrollLeft,
      //     behavior: isScroll ? "smooth" : undefined,
      //   });
      // }

      ref.current.scrollTo(
        getMoveSlideState({
          currentIndex,
          deltaY,
          maxScrollLeft,
          setCurrentIndex: (value) => setCurrentIndex(() => value),
          isScroll,
        })
      );
    },
    [currentIndex, maxScrollLeft]
  );

  const handleScroll = useCallback(
    (event) => {
      event.preventDefault();
      moveSlide(event.deltaY, true);
    },
    [moveSlide]
  );

  const handleTouchStart = useCallback((event) => {
    event.preventDefault();
    const touchStartX = event.touches[0].clientX;
    ref.current.touchStartX = touchStartX;
    isTouching.current = true;
  }, []);

  const handleTouchMove = useCallback(
    (event) => {
      event.preventDefault();
      if (!isTouching.current) return;

      const touchEndX = event.touches[0].clientX;
      const touchStartX = ref.current.touchStartX;

      if (touchStartX - touchEndX > 50) {
        moveSlide(15);
      } else if (touchStartX - touchEndX < -50) {
        moveSlide(-15);
      }
    },
    [moveSlide]
  );

  const handleTouchEnd = () => {
    isTouching.current = false;
  };

  useEffect(() => {
    const sliderElement = ref.current;

    sliderElement.addEventListener("wheel", handleScroll);
    sliderElement.addEventListener("touchstart", handleTouchStart);
    sliderElement.addEventListener("touchmove", handleTouchMove);
    sliderElement.addEventListener("touchend", handleTouchEnd);

    return () => {
      sliderElement.removeEventListener("wheel", handleScroll);
      sliderElement.removeEventListener("touchstart", handleTouchStart);
      sliderElement.removeEventListener("touchmove", handleTouchMove);
      sliderElement.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleScroll, handleTouchMove, handleTouchStart]);

  useEffect(() => {
    const { current } = ref;

    if (current) {
      const maxScroll = current.scrollWidth - current.clientWidth;
      setMaxScrollLeft(maxScroll);
    }
  }, []);

  return (
    <Styles.Wrapper ref={ref}>
      <Styles.WrapperContent>
        <Styles.ContentSidebarHandle>{children}</Styles.ContentSidebarHandle>
      </Styles.WrapperContent>
    </Styles.Wrapper>
  );
};
