import { CommonUtils } from '../CommonUtils';
import { EntityV2 } from './Entity';
import { ValueObject } from './ValueObject';

function isEntity(obj: unknown): obj is EntityV2<unknown, unknown> {
  return (
    Object.prototype.hasOwnProperty.call(obj, 'toObject') &&
    Object.prototype.hasOwnProperty.call(obj, 'id') &&
    ValueObject.isValueObject((obj as EntityV2<unknown, unknown>).id)
  );
}

function convertToPlainObject(item: any): any {
  if (CommonUtils.isNil(item)) {
    return item;
  }

  if (isEntity(item)) {
    return item?.toObject();
  }
  return item;
}

/**
 * Converts Entity/Value Objects props to a plain object.
 * Useful for testing and debugging.
 * @param props
 */
export function convertPropsToObject(props: any): any {
  const propsCopy = { ...props };
  // eslint-disable-next-line guard-for-in
  for (const prop in propsCopy) {
    if (Array.isArray(propsCopy[prop])) {
      propsCopy[prop] = (propsCopy[prop] as Array<unknown>)?.map((item) => {
        return convertToPlainObject(item);
      });
    }
    propsCopy[prop] = convertToPlainObject(propsCopy[prop]);
  }

  return propsCopy;
}
