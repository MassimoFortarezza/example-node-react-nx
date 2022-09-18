import { NotFoundException, PromiseUtils } from '@mf-cos/server';

import { CompanyTable } from '../../../../../database';
import { TaSpecialities } from '../../../../_shared/type.alias';
import { ConstructionCompanyEntity } from '../../../core/domain/models/company/company.entity';
import { ConstructionCompanyMapper } from './construction-company.mapper';
import { IConstructionCompaniesRepositoryPort } from './construction-company.repository.port';

export class ConstructionCompanyRepository
  implements IConstructionCompaniesRepositoryPort
{
  uow: CompanyTable[];
  constructor(uow) {
    this.uow = uow;
  }

  async findAllBySpecialityAndName(
    companyNameToSearch: string,
    requestedSpecialities: TaSpecialities[],
  ): Promise<ConstructionCompanyEntity[]> {
    // THIS SHOULD USUALLY BE A ORM FUNCTION => this.orm.find................................
    const query = async () => {
      const companiesFound = this.uow.filter(
        (company: CompanyTable) =>
          company.name === companyNameToSearch &&
          requestedSpecialities.some((speciality) =>
            company.specialities.some(
              (companySpecialities) => companySpecialities === speciality,
            ),
          ),
      );

      if (!companiesFound.length) {
        throw new NotFoundException({
          message: 'Companies not found.',
          code: 'COMPANIES_NOT_FOUND',
        });
      }
      return companiesFound;
    };

    const [errorCompanyFound, foundValues] = await PromiseUtils.useCatch<
      CompanyTable[]
    >(query());

    if (errorCompanyFound) throw errorCompanyFound;
    return foundValues
      ? foundValues.map((companyFound) =>
          ConstructionCompanyMapper.toDomain(companyFound),
        )
      : [];
  }
}
