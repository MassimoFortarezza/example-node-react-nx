import { TaCity } from '@mf-cos/api-interfaces';
import { ValidationBuilder, ValueObject } from '@mf-cos/ddd';

type Slots = {
  value: TaCity;
};

export class CityVo extends ValueObject<Slots> {
  public static build({ value }: Slots) {
    return new CityVo({
      value: ValidationBuilder.build(value, 'city').isString().get(),
    });
  }

  public get value() {
    return this.props.value;
  }
}
