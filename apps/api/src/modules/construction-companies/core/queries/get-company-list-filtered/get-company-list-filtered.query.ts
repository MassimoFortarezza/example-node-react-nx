import { Query } from '@mf-cos/ddd';
import { PromiseUtils } from '@mf-cos/server';

import { IConstructionCompaniesRepositoryPort } from '../../../adapters/persistance/construction-company/construction-company.repository.port';
import { ConstructionCompanyEntity } from '../../domain/models/company/company.entity';
import { GetCompanyListFilteredPort } from './get-company-list-filtered.query.port';

export class GetCompanyListFilteredQuery
  implements Query<GetCompanyListFilteredPort, ConstructionCompanyEntity[]>
{
  constructor(
    private ConstructionCompaniesRepositoryAdapter: IConstructionCompaniesRepositoryPort,
  ) {
    //
  }

  public async execute(
    payload: GetCompanyListFilteredPort,
  ): Promise<ConstructionCompanyEntity[]> {
    const [errorsRetrievingConstructionCompanies, ConstructionCompanies] =
      await PromiseUtils.useCatch(
        this.ConstructionCompaniesRepositoryAdapter.findAllBySpecialityAndName(
          payload.constructionCompanyName,
          payload.companySpecialities,
        ),
      );

    if (errorsRetrievingConstructionCompanies)
      throw errorsRetrievingConstructionCompanies;

    return ConstructionCompanies;
  }
}
