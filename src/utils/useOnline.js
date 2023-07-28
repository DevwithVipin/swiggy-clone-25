import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("Online", handleOnline);
    window.addEventListener("Offline", handleOffline);
    return () => {
      window.removeEventListener("Online", handleOnline);
      window.removeEventListener("Offline", handleOffline);
    };
  }, []);
  return isOnline;
};
export default useOnline;
