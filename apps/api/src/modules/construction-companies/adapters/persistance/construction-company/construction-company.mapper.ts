import { CompanyTable } from '../../../../../database';
import { TaSpecialities } from '../../../../_shared/type.alias';
import { ConstructionCompanyEntity } from '../../../core/domain/models/company/company.entity';
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
      },
      String(orm.id),
    );
  }

  public static toPersistance(companyDomain: ConstructionCompanyEntity) {
    console.log(companyDomain.toObject().specialities);
    const company: CompanyTable = {
      name: companyDomain.name,
      id: companyDomain.id,
      specialities: companyDomain.toObject()
        .specialities as unknown as string[], // TODO: check and remove unknown
    };

    return company;
  }
}
