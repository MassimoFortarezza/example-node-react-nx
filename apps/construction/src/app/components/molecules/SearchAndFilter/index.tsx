import { SearchIcon } from '@chakra-ui/icons';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { TaSpecialities } from '@mf-cos/api-interfaces';
import debounce from 'debounce';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  inputTextSelector,
  saveInputText,
  saveSpecialities,
  specialitiesSelector,
} from '../../../store/SearchSlice';
import { useDebounce } from '../../../utils/debounce';

export const SearchAndFilters = memo(() => {
  const dispatch = useDispatch();
  const inputText = useSelector(inputTextSelector);
  const specialities = useSelector(specialitiesSelector);
  const [search, setSearch] = useState('');
  const [defaultCheckboxes, setDefaultCheckboxes] = useState(specialities);

  const debouncedInputText = useDebounce(search, 500);
  const inputTextOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [],
  );

  const selectFilters = useCallback(
    (values: TaSpecialities[]) => {
      dispatch(saveSpecialities(values));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(saveInputText(debouncedInputText));
  }, [debouncedInputText, dispatch]);

  useEffect(() => {
    setDefaultCheckboxes(specialities);
    setSearch(inputText);
  }, []);

  return (
    <Stack mb={5} mt={10} direction="row">
      <InputGroup flex={0.5}>
        <Input
          value={search}
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
          defaultValue={defaultCheckboxes}
          onChange={selectFilters}
        >
          <Spacer maxW={3} />
          <Checkbox colorScheme="blue" value="Building">
            Building
          </Checkbox>
          <Spacer maxW={3} />
          <Checkbox colorScheme="red" value="Plumbing">
            Plumbing
          </Checkbox>
          <Spacer maxW={3} />
          <Checkbox colorScheme="green" value="Electricians">
            Electricians
          </Checkbox>
        </CheckboxGroup>
      </Flex>
    </Stack>
  );
});
