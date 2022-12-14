import {
  TaConstructionCompanyName,
  TaSpecialities,
} from '@mf-cos/api-interfaces';

import { ConstructionCompanyEntity } from '../../../core/domain/models/company/company.entity';

export interface IConstructionCompaniesRepositoryPort {
  uow: Record<string, unknown>[];

  findAllBySpecialityAndName(
    companyNameToSearch: TaConstructionCompanyName,
    requestedSpecialities: TaSpecialities[],
  ): Promise<ConstructionCompanyEntity[]>;
}
