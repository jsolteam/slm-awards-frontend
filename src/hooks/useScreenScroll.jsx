import { useEffect, useRef } from "react";

export const useScreenScroll = () => {
  const sectionsRef = useRef([]);

  const handleScroll = (event) => {
    const delta = event.deltaY;

    if (delta > 0) {
      // Прокрутка вниз
      const currentIndex = sectionsRef.current.findIndex((section) => {
        const { bottom, top, height } = section.getBoundingClientRect();

        return bottom > 0 && top < 0 && height > bottom;
      });
      if (currentIndex < sectionsRef.current.length - 1) {
        sectionsRef.current[currentIndex + 1].scrollIntoView({
          behavior: "smooth",
        });
      }
    } else {
      // Прокрутка вверх
      const currentIndex = sectionsRef.current.findIndex((section) => {
        const { bottom, top, height } = section.getBoundingClientRect();

        return bottom > 0 && top < 0 && height > bottom;
      });
      if (currentIndex > 0) {
        sectionsRef.current[currentIndex - 1].scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return {
    sectionsRef,
  };
};
