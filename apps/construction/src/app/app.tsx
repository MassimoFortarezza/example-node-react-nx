import { ChakraProvider } from '@chakra-ui/react';
import { Message } from '@mf-cos/api-interfaces';
import React, { useEffect, useState } from 'react';

export function App() {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <ChakraProvider>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to construction!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>
      <div>{m.message}</div>
    </ChakraProvider>
  );
}

export default App;
