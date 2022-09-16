import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Overlay from './components/atoms/Overlay';
import CheckoutModal from './components/organisms/CheckoutModal';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import HomePage from './components/templates/HomePage';
import store from './store';
import ModalContextProvider from './store/ModalContextProvider';
import theme from './styles/theme';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS>
        <Provider store={store}>
          <ModalContextProvider>
            <>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />}>
                  {/* <Route path="teams" element={<Teams />}>
                  <Route path=":teamId" element={<Team />} />
                  <Route path="new" element={<NewTeamForm />} />
                  <Route index element={<LeagueStandings />} />
                </Route> */}
                </Route>
              </Routes>
              <Footer />
              <CheckoutModal />
              <Overlay />
            </>
          </ModalContextProvider>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}
