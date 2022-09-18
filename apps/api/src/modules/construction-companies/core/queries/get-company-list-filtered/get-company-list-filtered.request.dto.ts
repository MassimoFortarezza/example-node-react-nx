import {
  TaConstructionCompanyName,
  TaSpecialities,
} from '../../../../_shared/type.alias';
import { GetCompanyListFilteredPort } from './get-company-list-filtered.query.port';

type Dto = {
  inputText: TaConstructionCompanyName;
  specialities: TaSpecialities[];
};

export class GetCompanyListFilteredRequestDto {
  public static build = (props: Dto): GetCompanyListFilteredPort => ({
    constructionCompanyName: props.inputText,
    companySpecialities: props.specialities,
  });
}
