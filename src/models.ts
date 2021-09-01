export interface Contract<Data extends Object> {
  uuid: string
  Data: Data;
}

export interface IQueueListener<Data> {
  (message: Data): Promise<void>;
}
