export interface Command<TCommandPort, TCommandResult> {
    execute(port: TCommandPort): Promise<TCommandResult>;
}
