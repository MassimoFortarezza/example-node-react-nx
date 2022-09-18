import { TaConstructionCompanyName, TaSpecialities } from './type.alias';

export type GetCompanyListFilteredResponse = TaCompany[];

export type TaCompany = {
  id: string;
  name: string;
  specialities: string[];
};

export type CompanyListFilteredRequestDto = {
  inputText: TaConstructionCompanyName;
  specialities: TaSpecialities[];
};
