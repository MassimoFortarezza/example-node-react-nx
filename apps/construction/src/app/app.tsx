import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Overlay from './components/atoms/Overlay';
import Footer from './components/organisms/Footer';
import HomePage from './components/templates/HomePage';
import ListCompanies from './components/templates/ListCompanies';
import store from './store';
import theme from './styles/theme';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS>
        <Provider store={store}>
          <>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="companies" element={<ListCompanies />} />
              {/* <Route path="companies" element={<ListCompanies />}>
                    <Route path=":speciality" element={<ListCompanies />} /> */}
              {/* <Route path=":companyName" element={<Team />} />
                    <Route path="new" element={<NewTeamForm />} />
                    <Route index element={<LeagueStandings />} /> */}
              {/* </Route> */}
            </Routes>
            <Footer />
            <Overlay />
          </>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
}
