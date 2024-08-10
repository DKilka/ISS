import { useEffect, useState } from "react";

const UTCTime = () => {
  const [currentUTCTime, setCurrentUTCTime] = useState<Date>(new Date());

  useEffect(() => {
    const updateTime = () => {
      setCurrentUTCTime(new Date());
    };
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [currentUTCTime]);

  return (
    <h2 className="font-bold border border-black h-fit p-2">
      Current UTC time: {currentUTCTime.toUTCString()}
    </h2>
  );
};

export default UTCTime;
