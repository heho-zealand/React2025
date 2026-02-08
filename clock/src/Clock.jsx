import { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {setCurrentTime(new Date());}, 1000);
    return () => clearInterval(timerId);
  }, []);
  
  return (
    <div>
      <h1>The Clock is: {currentTime.toLocaleTimeString()}</h1>
    </div>
  );
}

export default Clock;