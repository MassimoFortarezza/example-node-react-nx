import { Nullable, ValidationException } from '@mf-cos/server';
import { isDate, isEmpty, isNumber, isString, isUUID } from 'class-validator';

import { ValidationMessage, ValidationMessageUtils } from './ValidationUtils';

export class ValidationBuilder<Value> {
  private value: Value;
  // private readonly messages: ValidationMessage[] = [];
  private readonly propertyLabel?: string;
  private optional: boolean;

  private constructor(value: Value, propertyLabel?: string) {
    this.value = value;
    this.propertyLabel = propertyLabel;
    this.optional = false;
  }

  public static build<Value>(
    value: Value,
    propertyLabel?: string,
  ): ValidationBuilder<Value> {
    return new ValidationBuilder(value, propertyLabel);
  }

  public get() {
    return this.value;
  }

  public isDate() {
    if (!this.optional && !isDate(this.value)) {
      throw ValidationException.new({
        message: ValidationMessageUtils.notValid({
          propertyLabel: this.propertyLabel,
          value: this.value,
        }),
      });
    }
    return this;
  }

  public isOptional(defaultValue?: Nullable<Value>) {
    if (this.value) {
      return this;
    }
    this.optional = true;
    if (defaultValue) {
      this.value = defaultValue;
    } else {
      this.value = null as unknown as Value;
    }
    return this;
  }

  public isRequired() {
    this.optional = false;
    return this;
  }

  public isUUID() {
    this.isString();
    if (!this.optional && !isUUID(this.value)) {
      throw ValidationException.new({
        message: ValidationMessageUtils.notValid({
          propertyLabel: this.propertyLabel,
          value: this.value,
        }),
      });
    }
    return this;
  }

  public isNumber() {
    if (!this.optional && !isNumber(this.value)) {
      throw ValidationException.new({
        message: ValidationMessageUtils.mustBeNumber({
          propertyLabel: this.propertyLabel,
          value: this.value,
        }),
      });
    }
    return this;
  }

  public isString() {
    if (!this.optional && !isString(this.value)) {
      throw ValidationException.new({
        message: ValidationMessageUtils.mustBeString({
          value: this.value,
          propertyLabel: this.propertyLabel,
        }),
      });
    }
    return this;
  }

  public isDbType(value: string[] = []) {
    const DEFAULT = ['BOOL', 'INT', 'STRING'];
    const list = [...DEFAULT, ...this.eachToUpperCase(value)];
    this.isString();
    if (!this.optional && !list.includes(String(this.value))) {
      throw ValidationException.new({
        message: ValidationMessageUtils.oneOf({
          value: this.value,
          list,
          propertyLabel: this.propertyLabel,
        }),
      });
    }
    return this;
  }

  /*
   * @example
   * .addValidation(isIMEI, { validationMessage: 'notValid' })
   */
  public addValidation(
    fn: (a: unknown) => boolean,
    opts: {
      validationMessage: ValidationMessage;
      message?: (a?: unknown) => string;
      list?: unknown[];
    },
  ) {
    if (!fn(this.value)) {
      throw ValidationException.new({
        message: opts?.message
          ? opts.message(this.value)
          : ValidationMessageUtils[opts.validationMessage]({
              value: this.value,
              list: opts?.list ?? [],
              propertyLabel: this.propertyLabel ?? '',
            }),
      });
    }
    return this;
  }

  private eachToUpperCase(list: string[] = []) {
    return list.map((a) => a.toUpperCase());
  }
  private static isEmpty(value, propertyLabel: string) {
    if (isEmpty(value)) {
      throw ValidationException.new({
        message: ValidationMessageUtils.shouldNotBeEmpty({
          propertyLabel,
        }),
      });
    }
  }
}
