import { SearchIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { clearSearch, saveInputText } from '../../../store/SearchSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearSearch);
  });
  const searchOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [],
  );
  const goToSearchedCompany = useCallback(() => {
    dispatch(saveInputText(search));
    navigate('/companies');
  }, [search, dispatch, navigate]);

  return (
    <InputGroup>
      <Input
        value={search}
        onChange={searchOnChange}
        backgroundColor="white"
        placeholder="Plumbing SAGL"
        autoFocus
        borderRadius={25}
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
            onClick={goToSearchedCompany}
          >
            <SearchIcon color="textLight" height="100%" />
          </Button>
        }
      />
    </InputGroup>
  );
};
