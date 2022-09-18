import { VStack } from '@chakra-ui/react';
import { TaCompany } from '@mf-cos/api-interfaces';

import Company from '../../molecules/Company';

const Companies: React.FC<{ companies: TaCompany[] }> = ({
  companies,
}): JSX.Element => (
  <VStack
    mt={{ base: '4rem' }}
    spacing={{ base: '7.5rem' }}
    mb={{ base: '7.5rem' }}
  >
    {companies?.map((company) => (
      <Company key={company.id} {...company} />
    ))}
  </VStack>
);

export default Companies;
