import { useEffect, useState } from "react";

const useOrigin = () => {
  const [isMouted, setIsMouted] = useState(false);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => {
    setIsMouted(true);
  }, []);

  if (!isMouted) {
    return "";
  }

  return origin;
};

export default useOrigin;
