import { useState, useEffect } from 'react';

function TheMonth() {
  const [monthName, setMonthName] = useState('');

  useEffect(() => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' }); 
    setMonthName(month);
  }, []);

  return (
    <span>
      {monthName}
    </span>
  );
}

export default TheMonth;