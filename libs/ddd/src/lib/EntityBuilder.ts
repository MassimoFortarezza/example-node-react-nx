import { LoggerService, SystemUtils } from '@mf-cos/server';

export class EntityBuilder<Props> {
  private readonly builder: EntityBuilder<Props>;
  private readonly props: Props;

  private constructor() {
    this.builder = this;
    this.props = {} as Props;
  }

  public static builder<Props>() {
    return new EntityBuilder<Props>();
  }

  public build(): Props {
    return this.props;
  }

  public set(propName: keyof Props, value) {
    this.props[propName] = value;
    return this.builder;
  }

  public log(ctx: string) {
    if (process.env.NODE_ENV !== 'testing') {
      console.log(`-------------------`);
      console.log(`[${ctx}]:`);
      SystemUtils.deepLogger(this.props);
      LoggerService.info(`[${ctx}]:${JSON.stringify(this.props)}`);
      console.log(`-------------------`);
    }
    return this.builder;
  }
}
