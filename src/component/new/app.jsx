import React, { useState, useEffect } from 'react';
import Greeter from './Greeter';

const App = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (loaded === false) {
      setTimeout(() => setLoaded(!loaded), 3000);
    }
  }, [loaded]);

  let handleClick = () => setLoaded(!loaded);

  if (loaded) {
    return (
      <div>
        <Greeter name="Kanye" phrase="I'm WALT DISNEY! STEVE JOBS!. IM GREAT" />
        <Greeter name="Ali" phrase="I'm the greatest" />
        <Greeter name="Thomas the Cat" phrase="Ahhhhahahahooowwwww" />
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <p>You are logging in as: {username}</p>
        <p>{props.text}</p>
      </div>
    );
  } else {
    return (
      <>
        <h1>Loading...</h1>
        <button onClick={() => handleClick()}>Click to load page</button>
      </>
    );
  }
};

export default App;