import CompaniesDB from '../../../../../database';
import { ConstructionCompanyRepository } from './construction-company.repository';
import { IConstructionCompaniesRepositoryPort } from './construction-company.repository.port';

export class ConstructionCompanyRepositoryAdapter {
  public static build(): IConstructionCompaniesRepositoryPort {
    return new ConstructionCompanyRepository(CompaniesDB);
  }
}
