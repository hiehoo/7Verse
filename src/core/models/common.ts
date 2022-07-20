export type SafeAny = any;

export interface Dictionary {
  [k: string]: SafeAny;
}

export interface IRoutes {
  [key: string]: string;
}

export interface BaseControlProps {
  label?: string;
  subtitle?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  type?: string;
  minValue?: number;
  value?: string;
  allowNegativeNumber?: boolean;
  allowDecimalNumber?: boolean;
  rows?: number;
}
export interface CardDetail {
  card_brand: string;
  card_pin: string;
  card_serial: string;
  completed_at: string;
  created_at: string;
  description: string;
  failure_reason: string;
  fee: string;
  final_amount: string;
  invoice_no: string;
  payment_no: string;
  real_amount: number;
  request_amount: number;
  status: string;
  user_id: number;
  user_name: string;
  denomination?: number;
}
