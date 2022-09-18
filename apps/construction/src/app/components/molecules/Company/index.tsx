import {
  Badge,
  Box,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { TaCompany } from '@mf-cos/api-interfaces';

const Company: React.FC<TaCompany> = ({ name, specialities }): JSX.Element => {
  return (
    <Stack
      spacing={{ base: '1rem', lg: '0' }}
      direction={{ base: 'column' }}
      sx={{
        '@media screen and (min-width: 62em)': {
          '&:nth-of-type(odd) div:nth-of-type(1)': {
            marginRight: '7.8125rem',
          },
          '&:nth-of-type(even) div:nth-of-type(1)': {
            order: 1,
            marginLeft: '7.8125rem',
          },
          alignItems: 'center',
          flexDirection: 'row',
        },
      }}
    >
      <Box flexBasis={{ lg: '55%' }}>
        <picture>
          <source
            media="(min-width: 62em)"
            srcSet={
              'https://source.unsplash.com/random/800x500?' +
              specialities.concat(',')
            }
          />
          <source
            media="(min-width: 30em)"
            srcSet={
              'https://source.unsplash.com/random/400x200?' +
              specialities.concat(',')
            }
          />
          <Image
            src={
              'https://source.unsplash.com/random/300x200?' +
              specialities.concat(',')
            }
            objectFit="cover"
            width="100%"
            borderRadius="0.5rem"
            alt={name}
          />
        </picture>
      </Box>

      <Box textAlign={{ base: 'center', lg: 'left' }} flexBasis={{ lg: '45%' }}>
        <Heading
          as="h2"
          mb={{ base: '1rem' }}
          textTransform="uppercase"
          fontSize={{ base: '1.75rem' }}
          letterSpacing="0.0625rem"
          maxWidth={{ base: '13ch' }}
          mx={{ base: 'auto', lg: 'unset' }}
        >
          {name}
        </Heading>
        {specialities.map((speciality) => (
          <Badge colorScheme="green">{speciality}</Badge>
        ))}
        <Spacer height={'.5rem'} />
        <Text
          mb={{ base: '1.5rem' }}
          px={{ sm: '2rem', md: '4rem', lg: 0 }}
          pr="1rem"
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature.
        </Text>
      </Box>
    </Stack>
  );
};

export default Company;
