import { Nullable } from '@mf-cos/server';

import { convertPropsToObject } from './utils';

export abstract class EntityV2<Props, Id> {
  protected _id: Nullable<Id>;
  protected props: Props;

  protected constructor(props: Props, id?: Id) {
    this._id = id ?? null;
    this.props = props;
    this.validate();
  }

  protected abstract validate(): void;

  public get id(): Nullable<Id> {
    return this._id;
  }

  /**
   * Returns current **copy** of entity's props.
   * Modifying entity's state won't change previously created
   * copy returned by this method since it doesn't return a reference.
   * If a reference to a specific property is needed create a getter in parent class.
   *
   * @return {*}  {Props & EntityProps}
   * @memberof Entity
   */
  public getPropsCopy(): Props {
    const propsCopy = {
      id: this.id,
      ...this.props,
    };
    return Object.freeze(propsCopy);
  }

  /**
   * Convert an Entity and all sub-entities/Value Objects it
   * contains to a plain object with primitive types. Can be
   * useful when logging an entity during testing/debugging
   */
  public toObject(): Props {
    const plainProps = convertPropsToObject(this.props);
    const result = {
      id: this.id,
      ...plainProps,
    };
    return Object.freeze(result);
  }
}
