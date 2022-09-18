import { TaCity, TaSpecialities } from '@mf-cos/api-interfaces';

import { CompanyTable } from '../../../../../database';
import { ConstructionCompanyEntity } from '../../../core/domain/models/company/company.entity';
import { CityVo } from '../../../core/domain/models/company/value-objects/city.vo';
import { SpecialityVo } from '../../../core/domain/models/company/value-objects/speciality.vo';

export class ConstructionCompanyMapper {
  public static toDomain(orm: CompanyTable): ConstructionCompanyEntity {
    return ConstructionCompanyEntity.build(
      {
        name: orm.name,
        specialities: orm.specialities.map((speciality) =>
          SpecialityVo.build({
            value: speciality as unknown as TaSpecialities,
          }),
        ),
        city: CityVo.build({ value: orm.city as unknown as TaCity }),
      },
      String(orm.id),
    );
  }

  public static toPersistance(companyDomain: ConstructionCompanyEntity) {
    const company: CompanyTable = {
      name: companyDomain.name,
      id: companyDomain.id,
      city: companyDomain.city as unknown as string,
      specialities: companyDomain.specialities as unknown as string[], // TODO: check and remove unknown
    };

    return company;
  }
}
