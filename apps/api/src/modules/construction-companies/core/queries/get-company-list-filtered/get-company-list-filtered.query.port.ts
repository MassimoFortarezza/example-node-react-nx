import {
  TaConstructionCompanyName,
  TaSpecialities,
} from '../../../../_shared/type.alias';

export type GetCompanyListFilteredPort = {
  constructionCompanyName: TaConstructionCompanyName;
  companySpecialities: TaSpecialities[];
};
