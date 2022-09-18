import {
  CompanyListFilteredRequestDto,
  TaSpecialities,
} from '@mf-cos/api-interfaces';

import { GetCompanyListFilteredPort } from './get-company-list-filtered.query.port';

export class GetCompanyListFilteredRequestDto {
  public static build = (
    props: CompanyListFilteredRequestDto,
  ): GetCompanyListFilteredPort => ({
    constructionCompanyName: props.inputText,
    companySpecialities: props.specialities
      ? ((props.specialities as unknown as string).split(
          ',',
        ) as TaSpecialities[])
      : [],
  });
}
