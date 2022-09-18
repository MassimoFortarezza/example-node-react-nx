export type ValidationMessage =
  | 'oneOf'
  | 'mustBeString'
  | 'mustBeNumber'
  | 'notValid'
  | 'mustBeBoolean'
  | 'shouldNotBeEmpty';

export class ValidationMessageUtils {
  private static getMessage(value: unknown, propertyLabel = ''): string {
    return `property ${propertyLabel} with value:${value}`;
  }

  public static oneOf({
    value,
    list,
    propertyLabel,
  }: {
    value: unknown;
    propertyLabel?: string;
    list: Array<unknown>;
  }) {
    return `property ${propertyLabel} with value:${value} must be one of ${list}`;
  }
  public static mustBeString({
    value,
    propertyLabel,
  }: {
    value: unknown;
    propertyLabel?: string;
  }) {
    return `${ValidationMessageUtils.getMessage(
      value,
      propertyLabel,
    )} must be a string`;
  }
  public static mustBeNumber({
    value,
    propertyLabel,
  }: {
    value: unknown;
    propertyLabel?: string;
  }) {
    return `${ValidationMessageUtils.getMessage(
      value,
      propertyLabel,
    )} must be a number`;
  }
  public static notValid({
    value,
    propertyLabel,
  }: {
    value: unknown;
    propertyLabel?: string;
  }) {
    return `${ValidationMessageUtils.getMessage(
      value,
      propertyLabel,
    )} not valid`;
  }
  public static mustBeBoolean({
    value,
    propertyLabel,
  }: {
    value: unknown;
    propertyLabel?: string;
  }) {
    return `${ValidationMessageUtils.getMessage(
      value,
      propertyLabel,
    )} must be a boolean`;
  }
  public static shouldNotBeEmpty({ propertyLabel }: { propertyLabel: string }) {
    return `property ${propertyLabel} can't be empty`;
  }
}
