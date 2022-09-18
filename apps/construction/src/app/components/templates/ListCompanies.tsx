import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { TaSpecialities } from '@mf-cos/api-interfaces';
import debounce from 'debounce';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useGetCompanyListFilteredQuery } from '../../api/companiesApi';
import {
  inputTextSelector,
  saveInputText,
  saveSpecialities,
  specialitiesSelector,
} from '../../store/SearchSlice';
import { closeNav } from '../../store/UISlice';
import GoBackLink from '../atoms/GoBackLink';
import BestGear from '../molecules/BestGear';
import CategoriesLinks from '../organisms/CategoriesLinks';
import Companies from '../organisms/Companies';

const ListCompanies: React.FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const inputText = useSelector(inputTextSelector);
  const specialities = useSelector(specialitiesSelector);
  const { data: companiesData = [], isSuccess } =
    useGetCompanyListFilteredQuery({
      specialities,
      inputText,
    });

  useEffect(() => {
    dispatch(closeNav());
  }, [pathname, dispatch]);

  return (
    <Box as="main" id="main">
      <Container maxW="container.lg" px={6} mt="1">
        <GoBackLink />
        <CategoriesLinks />
        <SearchAndFilters />
        <Skeleton isLoaded={isSuccess} fadeDuration={1}>
          <Companies companies={companiesData} />
        </Skeleton>

        {/* <ListFallback />
        </Skeleton> */}
        <BestGear />
      </Container>
    </Box>
  );
};

const SearchAndFilters = () => {
  const dispatch = useDispatch();
  const inputTextOnChange = debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(saveInputText(e.target.value));
    },
    500,
  );

  const selectFilters = useCallback((values: TaSpecialities[]) => {
    dispatch(saveSpecialities(values));
  }, []);

  return (
    <Stack mb={5} mt={10} direction="row">
      <InputGroup flex={0.5}>
        <Input
          onChange={inputTextOnChange}
          backgroundColor="white"
          autoFocus
          borderRadius={25}
          borderColor="lightGray"
          focusBorderColor="accent"
        />
        <InputRightElement
          borderBottomEndRadius={25}
          borderTopEndRadius={25}
          children={
            <Button
              pl={3}
              pr={4}
              borderBottomStartRadius={0}
              borderTopStartRadius={0}
            >
              <SearchIcon color="textLight" height="100%" />
            </Button>
          }
        />
      </InputGroup>
      <Flex flex={1} alignItems="center">
        <CheckboxGroup
          colorScheme="green"
          defaultValue={[]}
          onChange={selectFilters}
        >
          <Spacer maxW={3} />
          <Checkbox colorScheme="red" value="Plumbing">
            Plumbing
          </Checkbox>
          <Spacer maxW={3} />
          <Checkbox colorScheme="blue" value="Building">
            Building
          </Checkbox>
          <Spacer maxW={3} />
          <Checkbox colorScheme="green" value="Electrician">
            Electrician
          </Checkbox>
        </CheckboxGroup>
      </Flex>
    </Stack>
  );
};

export default ListCompanies;
