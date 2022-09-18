import {
  TaConstructionCompanyName,
  TaSpecialities,
} from '../../../../_shared/type.alias';
import { ConstructionCompanyEntity } from '../../../core/domain/models/company/company.entity';

export interface IConstructionCompaniesRepositoryPort {
  uow: Record<string, unknown>[];

  findAllBySpecialityAndName(
    companyNameToSearch: TaConstructionCompanyName,
    requestedSpecialities: TaSpecialities[],
  ): Promise<ConstructionCompanyEntity[]>;
}
