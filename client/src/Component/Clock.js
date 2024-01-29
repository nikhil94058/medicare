import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';

export const Clock = () => {
  const [ctime, setCtime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );
  const [alarms, setAlarms] = useState([]);
  const [newAlarm, setNewAlarm] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      setCtime(currentTime);

      // Check if any alarm matches the current time
      alarms.forEach((alarm) => {
        if (alarm === currentTime) {
          alert('Alarm triggered!');
        }
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [alarms]);

  const addAlarm = () => {
    if (newAlarm !== '') {
      // Format new alarm to match the 12-hour format
      const formattedAlarm = new Date(`2000-01-01T${newAlarm}`).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      setAlarms([...alarms, formattedAlarm]);
      setNewAlarm('');
    }
  };

  return (
    <div>
      <Navbar />
      <div>{ctime}</div>
      <div>
        <input
          type="time"
          value={newAlarm}
          onChange={(e) => setNewAlarm(e.target.value)}
        />
        <button onClick={addAlarm}>Set Alarm</button>
      </div>
      <div>
        <h3>Alarms:</h3>
        <ul>
          {alarms.map((alarm, index) => (
            <li key={index}>{alarm}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
