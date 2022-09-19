import { Box, Container, Skeleton } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useGetCompanyListFilteredQuery } from '../../api/companiesApi';
import {
  inputTextSelector,
  specialitiesSelector,
} from '../../store/SearchSlice';
import { closeNav } from '../../store/UISlice';
import GoBackLink from '../atoms/GoBackLink';
import BestGear from '../molecules/BestGear';
import { SearchAndFilters } from '../molecules/SearchAndFilter';
import CategoriesLinks from '../organisms/CitySelections';
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

export default ListCompanies;
