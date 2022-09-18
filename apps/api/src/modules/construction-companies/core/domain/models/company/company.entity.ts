import {
  TaConstructionCompanyId,
  TaConstructionCompanyName,
  TaSpecialities,
} from '@mf-cos/api-interfaces';
import { EntityV2 } from '@mf-cos/ddd';

import { CityVo } from './value-objects/city.vo';
import { SpecialityVo } from './value-objects/speciality.vo';

export type ConstructionCompanyProps = {
  name: TaConstructionCompanyName;
  specialities: SpecialityVo[];
  city: CityVo;
};

export class ConstructionCompanyEntity extends EntityV2<
  ConstructionCompanyProps,
  TaConstructionCompanyId
> {
  protected _minimumAvailableSlots = 0;

  constructor(props: ConstructionCompanyProps, id: TaConstructionCompanyId) {
    super(props, id);
  }

  public static build(
    props: ConstructionCompanyProps,
    id: TaConstructionCompanyId,
  ): ConstructionCompanyEntity {
    return new ConstructionCompanyEntity(props, id);
  }

  public get name() {
    return this.props.name;
  }

  public get specialities() {
    return this.props.specialities.map((s) => s.value);
  }

  public get city() {
    return this.props.city.value;
  }

  // Business logic goes here
  public hasSpeciality(speciality: TaSpecialities) {
    return this.props.specialities.some((s) => s.value === speciality);
  }

  protected validate() {
    //
  }
}
