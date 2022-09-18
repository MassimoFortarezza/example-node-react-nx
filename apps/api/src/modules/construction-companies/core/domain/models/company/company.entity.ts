import { EntityV2 } from '@mf-cos/ddd';

import {
  TaConstructionCompanyId,
  TaConstructionCompanyName,
  TaSpecialities,
} from '../../../../../_shared/type.alias';
import { SpecialityVo } from './value-objects/speciality.vo';

export type ConstructionCompanyProps = {
  name: TaConstructionCompanyName;
  specialities: SpecialityVo[];
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

  public hasSpeciality(speciality: TaSpecialities) {
    return this.props.specialities.some((s) => s.value === speciality);
  }

  protected validate() {
    //
  }
}
