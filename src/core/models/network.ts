export interface BaseResponse<T> {
  code: number;
  data: T;
}

export interface AccessTokenRequest {
  token: string;
  provider: string;
}

export interface CardRequest {
  invoice_no?: string;
  amount?: number;
  client_ip?: string;
  card_serial?: string;
  card_pin?: string;
  card_brand?: string;
  description?: string;
  denomination?: number;
  quantity?: number;
}
