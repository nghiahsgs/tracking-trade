export enum EOrderType {
  BUY = "BUY",
  SELL = "SELL",
}

export interface IOrder {
  coin_name: string;
  note: string;
  conditions: Array<string>;
  order_type: EOrderType;
  volume: number;
}
