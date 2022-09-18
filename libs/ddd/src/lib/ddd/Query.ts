export interface Query<TQueryPort, TQueryResult> {
  execute(port: TQueryPort): Promise<TQueryResult>;
}
