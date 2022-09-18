import { GetCompanyListFilteredResponse } from '@mf-cos/api-interfaces';

import { ConstructionCompanyEntity } from '../../domain/models/company/company.entity';

type Input = ConstructionCompanyEntity[];

export class GetCompanyListFilteredResponseDto {
  public static build = (props: Input): GetCompanyListFilteredResponse =>
    props.map((companyEntity) => {
      return {
        id: companyEntity.id,
        name: companyEntity.name,
        specialities: companyEntity.specialities,
      };
    });
}
