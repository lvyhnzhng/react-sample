import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://express-sample-q591.onrender.com/api/hello`)
      .then(res => res.json())
      .then(data => {
        console.log('Data fetched:', data);
        setMsg(data.msg)
      }).catch(err => {
        console.error('Error fetching data:', err);
        setMsg('Error fetching data');
      })
      .finally(() => {setIsLoading(false);
        console.log(msg);
      });
  }, []);

  return (
    <div>
      <h1>My Custom React App</h1>
      <p>This is my updated content!</p>
    </div>
  );
}

export default App;