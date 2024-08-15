import { useState, useEffect } from "react";

function useResponsive(minWidth: number): boolean {
  const [isResponsive, setIsResponsive] = useState(
    typeof window !== "undefined" ? window.innerWidth >= minWidth : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth >= minWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth]);

  return isResponsive;
}

export default useResponsive;
