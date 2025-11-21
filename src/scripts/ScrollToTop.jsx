import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top every time the location changes (i.e. route changes)
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything, it just triggers the effect
};

export default ScrollToTop;
