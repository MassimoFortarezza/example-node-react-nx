import { VStack } from '@chakra-ui/react';
import { TaSpecialities } from '@mf-cos/api-interfaces';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { saveSpecialities } from '../../../store/SearchSlice';
import FirstHomeExtra from '../../molecules/FirstHomeExtra';
import SecondHomeExtra from '../../molecules/SecondHomeExtra';
import ThirdHomeExtra from '../../molecules/ThirdHomeExtra';

const MainGallery = (): JSX.Element => {
  const dispatch = useDispatch();
  const setSpeciality = useCallback(
    (val: TaSpecialities) => () => {
      dispatch(saveSpecialities([val]));
    },
    [],
  );

  return (
    <VStack
      mt="15rem"
      spacing={{ base: '1.5rem', sm: '2rem', lg: '3rem' }}
      align="stretch"
    >
      <FirstHomeExtra setSpeciality={setSpeciality('Building')} />
      <SecondHomeExtra setSpeciality={setSpeciality('Plumbing')} />
      <ThirdHomeExtra setSpeciality={setSpeciality('Electricians')} />
    </VStack>
  );
};

export default MainGallery;
