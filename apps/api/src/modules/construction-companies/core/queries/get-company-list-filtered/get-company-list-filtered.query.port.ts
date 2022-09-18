import {
  TaConstructionCompanyName,
  TaSpecialities,
} from '@mf-cos/api-interfaces';

export type GetCompanyListFilteredPort = {
  constructionCompanyName: TaConstructionCompanyName;
  companySpecialities: TaSpecialities[];
};
