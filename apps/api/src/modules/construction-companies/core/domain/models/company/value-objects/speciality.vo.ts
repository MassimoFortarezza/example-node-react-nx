import { ValidationBuilder, ValueObject } from '@mf-cos/ddd';

import { TaSpecialities } from '../../../../../../_shared/type.alias';

type Slots = {
  value: TaSpecialities;
};

export class SpecialityVo extends ValueObject<Slots> {
  public static build({ value }: Slots) {
    return new SpecialityVo({
      value: ValidationBuilder.build(value, 'speciality').isString().get(),
    });
  }

  public get value() {
    return this.props.value;
  }
}
