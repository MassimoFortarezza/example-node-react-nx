import moment from 'moment';

export class DateUtils {
  public static parseDateInTimezone(date: Date): string {
    const dtaFilter = moment(date);
    const result = moment(dtaFilter).format('YYYY-MM-DD HH:mm:ss');
    return String(result);
  }

  public static subtractDayInDate(date: Date, subt: number): string {
    const result = moment(date).subtract(subt, 'day').format('YYYY-MM-DD');
    return String(result);
  }

  public static toTimestamp(strDate): number {
    return Date.parse(strDate) / 1000;
  }

  public static getYesterdaysDate() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString();
  }
}
