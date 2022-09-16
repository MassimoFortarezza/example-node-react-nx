import { Center, ChakraProvider, Flex } from '@chakra-ui/react';
import { Message } from '@mf-cos/api-interfaces';
import React, { useEffect, useState } from 'react';

import theme from './styles/theme';

export function App() {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Center flexDirection={'column'}>
        <Center flexDirection={'column'}>
          <h1>Welcome to construction!</h1>
          <img
            width="450"
            src="https://raw.githubusercontent.com/nrwl/nx/master/assets/images/nx-logo.png"
            alt="Nx - Smart, Fast and Extensible Build System"
          />
        </Center>
        <div>{m.message}</div>
      </Center>
    </ChakraProvider>
  );
}

export default App;
