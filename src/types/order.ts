export enum EOrderType {
  BUY = "Buy",
  SELL = "Sell",
}

export interface IOrder {
  id: number;
  coin_name: string;
  note: string;
  conditions: Array<string> | string;
  order_type: EOrderType;
  volume: number;
}
