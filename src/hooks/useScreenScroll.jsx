import { useEffect, useRef } from "react";

export const useScreenScroll = () => {
  const sectionsRef = useRef([]);
  const touchStartY = useRef(0);
  const isTouching = useRef(false);

  const handleScroll = (event) => {
    event.preventDefault();
    const delta = event.deltaY;

    if (delta > 0) {
      // Прокрутка вниз
      const currentIndex = sectionsRef.current.findIndex(
        (section) => section.getBoundingClientRect().top >= 0
      );
      if (currentIndex < sectionsRef.current.length - 1) {
        sectionsRef.current[currentIndex + 1].scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      // Прокрутка вверх
      const currentIndex = sectionsRef.current.findIndex(
        (section) => section.getBoundingClientRect().top >= 0
      );
      if (currentIndex > 0) {
        sectionsRef.current[currentIndex - 1].scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
    isTouching.current = true;
  };

  const handleTouchMove = (event) => {
    if (!isTouching.current) return;

    const touchCurrentY = event.touches[0].clientY;
    const touchDiff = touchStartY.current - touchCurrentY;

    // Прокручиваем в зависимости от перемещения пальца
    if (touchDiff > 50) {
      // Прокрутка вниз
      const currentIndex = sectionsRef.current.findIndex(
        (section) => section.getBoundingClientRect().top >= 0
      );
      if (currentIndex < sectionsRef.current.length - 1) {
        sectionsRef.current[currentIndex + 1].scrollIntoView({
          behavior: "smooth",
        });
        isTouching.current = false; // Останавливаем дальнейшие движения
      }
    } else if (touchDiff < -50) {
      // Прокрутка вверх
      const currentIndex = sectionsRef.current.findIndex(
        (section) => section.getBoundingClientRect().top >= 0
      );
      if (currentIndex > 0) {
        sectionsRef.current[currentIndex - 1].scrollIntoView({
          behavior: "smooth",
        });
        isTouching.current = false; // Останавливаем дальнейшие движения
      }
    }
  };

  const handleTouchEnd = () => {
    isTouching.current = false;
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return {
    sectionsRef,
  };
};
